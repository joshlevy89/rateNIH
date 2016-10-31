import React, { Component } from 'react';
import { Link } from 'react-router';
require('../../styles/ResultsList.scss');


class ResultsList extends Component {
  render() {
  	const { results } = this.props
    if (results === null) return <div></div>
    return (
      <div className="result">
        <div>Male adverse events: {results.male}</div>
        <div>Female adverse events: {results.female}</div>
      </div>
    );
  }
}

export default ResultsList
