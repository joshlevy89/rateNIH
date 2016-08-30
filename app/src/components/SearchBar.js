import React, { Component } from 'react';
require('../../styles/SearchBar.scss')

class SearchBar extends Component {
  
  handleKeyPress(inputValue,key) {
  	const { search_friends } = this.props
  	if (key === 'Enter') {
  		search_friends(inputValue)
  	}
  }

  render() {
    return (
     <div>
     <h3 className="title">Search for friends</h3>
     <input className = "searchBar" ref="searchBar" 
     onKeyPress={e=>this.handleKeyPress(this.refs.searchBar.value,e.key)}/>
     </div>
    );
  }
}

export default SearchBar