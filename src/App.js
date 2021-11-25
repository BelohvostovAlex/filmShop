import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";

import setFilms from './actions/films'
import Card from "./components/Card";
import Header from './components/Header'

import 'semantic-ui-css/semantic.min.css'
import './scss/index.scss'

function App () {
  const filmsAll = useSelector(({films}) => films.items)
  const isReady = useSelector(({films}) => films.isReady)
  const dispatch = useDispatch()
console.log(isReady)
  React.useEffect(() => {
    axios.get('/films.json')
    .then(({data}) => {
      return dispatch(setFilms(data.films))
    })
  }, [])
  console.log(filmsAll)

    return (
     <div className="wrapper">
       <Header />
       <h1>FILMS</h1>
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

