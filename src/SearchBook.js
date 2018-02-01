import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBook extends React.Component {
		static propTypes = {
		results: PropTypes.array.isRequired,
		onLookUp: PropTypes.func.isRequired
	}
		
	state = {query: ''}

	updateQuery = (query) => {
			this.setState({query})
				this.props.onLookUp(query,20)
		}

	clearQuery = () => {
		this.setState({query:''})
				this.props.onLookUp('',20)
	}

	checkData = (data) => {	
			for(let book of this.props.books){
					if(book.id == data.id)
						return book
				}
				return data
		}
	
	 render() {
			 	if(Array.isArray(this.props.results))
			 	this.props.value.list = this.props.results
			 
			return (
					<div className="search-books">
						<div className="search-books-bar">
							<Link className="close-search" to="/" onClick={this.clearQuery}>Close</Link>
							<div className="search-books-input-wrapper">
								<input 
									type="text"
									placeholder="Search by title or author"
									value={this.state.query}
									onChange={(ev) => this.updateQuery(ev.target.value)}/>
							</div>
						</div>in
						<div className="search-books-results">
							<ol className="books-grid">
								{this.props.value.list.map((bookData,index) => (
									<li key={index}>
										<Book
											book={this.checkData(bookData)}
											updateBook={this.props.updateBook}/>
									</li>
								))}
				</ol>
						</div>
					</div>
				)
		 }
}

	SearchBook.defaultProps = {
			value: {list: []}
		};

export default SearchBook;