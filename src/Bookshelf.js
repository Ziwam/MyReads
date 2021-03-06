import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends React.Component {
  
  static propTypes = {
		books: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="self">{this.props.name}
          <div className="border1">
            <div className="border2"></div>
          </div>
        </h2>
        <div className="books">
          <ol className="grid">
        		{this.props.books.filter(book => book.shelf === this.props.shelf)
              .map((bookData,index) => (
                <li key={bookData.id}>
                    <Book
          				    book={bookData}
                 		  updateBook={this.props.updateBook}/>
                </li>
      		  ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;