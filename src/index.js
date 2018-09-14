import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDJowKxUE5Ooe6U36I0MHvXBgVHevncMV4'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = { videos: [] }

		YTSearch(
			{
				key: API_KEY,
				term: 'surfboards'
			},
			videos => {
				this.setState({ videos })
			}
		)
	}

	render() {
		return (
			<div>
				hiiii
				<SearchBar />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'))
