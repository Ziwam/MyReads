import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import SearchBook from './SearchBook'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

class BooksApp extends React.Component {
	constructor(props) {
		super(props);
		this.shelves = [
			{name:"Currently Reading", shelf:"currentlyReading"},
			{name:"Read", shelf:"read"},
			{name:"Want To Read", shelf:"wantToRead"}
		];
	}

	state = {
		books: [],
		results: []
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({books})
		})
	}

	updateBook = (id,shelf) => {
		BooksAPI.update(id,shelf).then(
			BooksAPI.get(id).then((book) => {
				var books = this.state.books.filter(obj => obj.id !== book.id);
				books.push(book);
				this.setState({books})
			})
		).catch((err)=>{
			console.log(err)
		})
	}
	
	lookUp = (query,max) => {
		if(query){
			BooksAPI.search(query,max).then((books) => {
					if(!books){
						if(this.state.results.length>0)
						this.setState({results: []})
					}else{
						this.setState({results: books})
					}
			})
		} else {
			this.setState({results: []})
		}
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
						<div className="header">
							<h1>MyReads</h1>
						</div>
						<div className="content">
							<div>
								{this.shelves.map((shelf,index) =>
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

export default BooksApp;