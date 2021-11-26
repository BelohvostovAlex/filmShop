import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import orderBy from "lodash/orderBy";

import setFilms from './redux/actions/films'
import setfilter from './redux/actions/filter'
import Card from "./components/Card";
import Header from './components/Header'
import Filter from "./components/Filter";

import 'semantic-ui-css/semantic.min.css'
import './scss/index.scss'

function App () {
  const filmsAll = useSelector(({films}) => films.items)
  const isReady = useSelector(({films}) => films.isReady)
  const filterBy = useSelector(({films}) => films.filterBy)
  console.log(filterBy)

  const dispatch = useDispatch()

  React.useEffect(() => {
    axios.get('/films.json')
    .then(({data}) => {
      return dispatch(setFilms(data.films))
    })
  }, [])
  const filterItems = ["Popular", "Genre", "Price(low)", "Price(High)"]
  const handleActive = (i) => {
    dispatch(setfilter(i))
  }

    return (
     <div className="wrapper">
       <Header />
       <Filter cards={filmsAll} filterItems={filterItems} handleActive={handleActive}/>
       <h1 className="sectionTitle">FILMS</h1>
       <div className="cards">
        {isReady 
        ? filmsAll.map((item,i) => {
          return <Card 
                  key={i}
                  {...item}/>
        })
        : 'Loading'
        }
         
       </div>
     </div>
    )
  }


export default App;

