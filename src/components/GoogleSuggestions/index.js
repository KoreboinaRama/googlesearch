/* eslint-disable import/no-unresolved */
// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  // eslint-disable-next-line no-undef
  state = {searchInput: '', suggestionsList: initialSuggestionsList}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  update = id => {
    const {suggestionsList} = this.state
    const filterData = suggestionsList.filter(each => each.id !== id)
    this.setState({suggestionsList: filterData})
  }

  render() {
    const {searchInput, suggestionsList} = this.state
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.includes(searchInput),
    )
    return (
      <div className="cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google"
          alt="google logo"
        />
        <div className="main">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            className="search-logo"
            alt="search icon"
          />
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeInput}
          />
          <ul className="search-cont">
            {searchResult.map(each => (
              <SuggestionItem
                update={this.update}
                suggestionDetails={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
