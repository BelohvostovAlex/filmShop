import React from "react";
import { connect } from 'react-redux'
import setFilms from './actions/films'
import Card from "./components/Card";

import './style.scss'

function App () {

    return (
     <div className="wrapper">
       <h1>FILMS</h1>
       <div className="cards">
        {[1,2,3,4,5].map((item,i) => {
          return <Card key={i}/>
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
