import React from 'react'

class Book extends React.Component {

  	handleChange = (e) => {
      	if(this.props.updateBook)
          this.props.updateBook(this.props.book, e.target.value)
    }
  
	 render() {
       if(this.props.book.imageLinks)
       this.props.values.url = this.props.book.imageLinks.thumbnail
       if(this.props.book.title)
       this.props.values.title = this.props.book.title
       if(this.props.book.authors)
       this.props.values.authors = this.props.book.authors
       this.props.values.shelf = "none"
       if(this.props.book.shelf)
       this.props.values.shelf = this.props.book.shelf
       
     	return (
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+this.props.values.url+')' }}></div>
              <div className="book-shelf-changer">
                <select onChange={this.handleChange} value={this.props.values.shelf}>
                  <option value="disable" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.values.title}</div>
            <div className="book-authors">{this.props.values.authors.join(', ')}</div>
          </div>
        )
     }
}


	Book.defaultProps = {
    	values: {
          url: '',
          title: '',
          authors: [],
          id:'',
          shelf:''}
    };

export default Book;