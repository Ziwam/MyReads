import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import SearchBook from './SearchBook'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
	state = {
		books: [],
		shelves: [
			{name:"Currently Readying", shelf:"currentlyReading"},
				{name:"Read", shelf:"read"},
		{name:"Want To Read", shelf:"wantToRead"}
		],
		results: []
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({books})
		})
	}

	updateBook = (id,shelf) => {
		BooksAPI.update(id,shelf).then(
			BooksAPI.getAll().then((books) => {
				console.log(books)
				this.setState({books})
			})
		)
	}
	
	lookUp = (query,max) => {
		BooksAPI.search(query,max).then((books) => {
				if(!books){
					if(this.state.results.length>0)
					this.setState({results: []})
				}else{
					this.setState({results: books})
				}
		})
	}

	render() {
		return (
			<div className="app">
			<Route path="/search" render={() => (
				<SearchBook
					updateBook={this.updateBook}
					onLookUp={this.lookUp}
					books={this.state.books}
					results={this.state.results}/>
			)}/>	
			 <Route exact path="/" render={() => (
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<div className="list-books-content">
							<div>
								{this.state.shelves.map((shelf,index) =>
									<Bookshelf
														key={index}
														updateBook={this.updateBook}
														name={shelf.name}
														shelf={shelf.shelf}
														books={this.state.books}/>
								)}
							</div>
						</div>
						<div className="open-search">
							<Link to="/search">Add a book</Link>
						</div>
					</div>
				)}/>
			</div>
		)
	}
}

export default BooksApp
