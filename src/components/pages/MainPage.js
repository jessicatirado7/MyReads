import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Shelf from '../Shelf';

class mainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  componentDidMount() {
    BooksAPI.getAll().then((books)=> {this.setState({ books: books });})
  }
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              name="Currently Reading"
              books={this.state.books.filter(
                (books) => books.shelf === "currentlyReading")}
            />
            <Shelf name="Want to read"
              books={this.state.books.filter(
                (books) => books.shelf === "wantToRead")}
            />
            <Shelf name="Read"
              books={this.state.books.filter(
                (books) => books.shelf === "read")}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book </Link>
        </div>
      </div>
    );
  }
}

export default mainPage;
