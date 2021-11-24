import React from "react";
import { connect } from 'react-redux'
import setFilms from './actions/films'


class App extends React.Component {
  render() {
    const { films } = this.props
    return (
      <ul>
      {
        films.map(film => (
          <li>{film.title}</li>
        ))
      }
    </ul>
    )
  }
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
