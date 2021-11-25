import React from "react";
import { connect, useSelector, useDispatch } from 'react-redux'
import axios from "axios";

import setFilms from './actions/films'
import Card from "./components/Card";

import './scss/index.scss'

function App () {
  const filmsAll = useSelector(({films}) => films.items)
  const dispatch = useDispatch()

  React.useEffect(() => {
    axios.get('/films.json')
    .then(({data}) => dispatch(setFilms(data.films)))
  }, [])

    return (
     <div className="wrapper">
       <h1>FILMS</h1>
       <div className="cards">
        {[].map((item,i) => {
          return <Card 
                  key={i}
                  {...item}/>
        })}
         
       </div>
     </div>
    )
  }


const mapStateToProps = ({films}) => {
  return {
    films: films.items
  }
}

const mapDispatchToProps = (dispatch) => ({

  setFilms: films => dispatch(setFilms(films))

})

export default connect(mapStateToProps,mapDispatchToProps)(App);

