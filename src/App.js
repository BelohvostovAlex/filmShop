import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import orderBy from "lodash/orderBy";

import setFilms from './redux/actions/films'
import {setFilter, setQuery} from "./redux/actions/filter";
import { addToCart, removeFromCart } from "./redux/actions/cart";
import Card from "./components/Card";
import Header from './components/Header'
import Filter from "./components/Filter";

import 'semantic-ui-css/semantic.min.css'
import './scss/index.scss'

function App () {
  const filterItems = ["Popular", "Newest", "Price(low)", "Price(High)"]

  const sortBy = (films, filterBy) => {
    switch(filterBy) {
      case 'Newest':
        return orderBy(films, 'year', 'desc')
      case 'Price(low)':
        return orderBy(films, 'price', 'asc')
      case 'Price(High)':
        return orderBy(films, 'price', 'desc')
      case 'Popular':
        return orderBy(films, 'rating', 'desc')
      default:
        return films
    }
  }

  const {filterBy, searchQuery} = useSelector(({filter}) => filter)
  const filmsAll = useSelector(({films}) => sortBy(films.items, filterBy))
  const isReady = useSelector(({films}) => films.isReady)
  const {items, totalPrice} = useSelector(({cart}) => cart) 
  const dispatch = useDispatch()


  React.useEffect(() => {
    axios.get('/films.json')
    .then(({data}) => {
      return dispatch(setFilms(data.films))
    })
  }, [])

  const handleActive = (type) => {
    dispatch(setFilter(type))
  }

  const handleSearch = (val) => {
    dispatch(setQuery(val))
  }

  const handleAddToCart = (obj) => {
    dispatch(addToCart(obj))
  }



    return (
     <div className="wrapper">
       <Header total={totalPrice} items={items}/>
       <Filter filmsAll={filmsAll} filterItems={filterItems} handleActive={handleActive} handleSearch={handleSearch} sortBy={sortBy}/>
       <h1 className="sectionTitle">FILMS</h1>
       <div className="cards">
        {isReady 
        ? filmsAll
        .filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .map((item,i) => {
          return <Card 
                  key={i}
                  item={item}
                  cartItems = {items}
                  addCard={handleAddToCart}/>
        })
        : 'Loading'
        }
         
       </div>
     </div>
    )
  }


export default App;

