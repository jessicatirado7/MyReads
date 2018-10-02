import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import { Route } from 'react-router-dom'

import mainPage from './components/pages/MainPage';
import searchPage from './components/pages/SearchPage';

class BooksApp extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component= { mainPage } />
        <Route exact path="/search" component= { searchPage } />
      </div>
    );
  }
}

export default BooksApp
