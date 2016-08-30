import React, { Component } from 'react';
import { Link } from 'react-router';
require('../../styles/ResultsList.scss');


class ResultsList extends Component {
  render() {
  	const { results } = this.props
    sessionStorage.setItem("results", JSON.stringify(results));
    return (
      <div>
      {/* List of results */}
      {results.map(result=>{
        return (
            <div key={result}>
              <Link className="result" to={`/wall/${result}`}>{result}</Link>
            </div>
          )})}
      </div>
    );
  }
}

export default ResultsList
