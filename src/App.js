import React from "react";
import { connect } from 'react-redux'
import setFilms from './actions/films'

class App extends React.Component {
  render() {
    const {films} = this.props.films
    console.log(films)
    const {setFilms} = this.props
    const newFilms = [
      {
        id: 0,
        title: "Superman"
      }
    ]
    return (
    <div className="container">
      <h1>{films[0].title}</h1>
      <button onClick={setFilms.bind(this, newFilms)}>Click</button>
    </div>
  );
    }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => ({

  setFilms: films => dispatch(setFilms(films))

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
