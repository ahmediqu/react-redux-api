import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { toggleButtonAction } from './actions/appActions';
import Navbar from './layouts/Navbar';
import HeroArea from './layouts/HeroArea';
import Cats from './components/Cats';
import CatDetails from './components/CatDetails';

class App extends Component {
  render() {
    const { toggleButton, toggleButtonAction } = this.props;

    return (
      <div className="App">
     

        <Router>
          <Fragment>
            <Navbar />
            
            <Route path="/" exact component={ HeroArea }/>
            <Route path="/" exact component={ Cats }/>
            <Switch>
              
              <Route exact path="/cats" component={ Cats } />
              <Route exact path="/cat-details" component={ CatDetails } />
              
            </Switch>
          </Fragment>
        </Router>
        {/* { toggleButton ? <h1>Hello World</h1> : <h1>Goodbye World</h1> }
        <button onClick={toggleButtonAction} className="btn btn-success">
          CLICKITY CLICK
        </button> */}
     
      </div>
    )
  }
};

const mapStateToProps = state => ({
  ...state.app
});

export default connect(
  mapStateToProps,
  { toggleButtonAction }
)(App);