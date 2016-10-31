import React, { Component } from 'react';
require('../../styles/SearchBar.scss')

class SearchBar extends Component {
  
  handleKeyPress(inputValue,key) {
  	const { search_drug } = this.props
  	if (key === 'Enter') {
  		search_drug(inputValue.toUpperCase())
  	}
  }

  render() {
    return (
     <div>
     <h3 className="title">Search for a drug</h3>
     <input className = "searchBar" ref="searchBar" 
     onKeyPress={e=>this.handleKeyPress(this.refs.searchBar.value,e.key)}/>
     </div>
    );
  }
}

export default SearchBar