import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MovieDetails from './Pages/MovieDetails';
import Footer from './Components/Footer';
import { getFecha } from './redux/actions/fecha';
//Redux 'bridge'
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    setInterval(() => {
      this.props.getFecha()
    }, 1000);
  }
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/'
            render={
              (routeParams) => <HomePage {...routeParams}/>
            }
          />
          <Route exact path='/details/:movieId'
            render={ (routeParams) => <MovieDetails {...routeParams} />
            }
          />
        </Switch>
        <Footer />
      </>
    );
  }
}

function mapStateToProps({ fecha }){
  return { fecha }
}

export default connect(mapStateToProps, {
  getFecha
})(App);
