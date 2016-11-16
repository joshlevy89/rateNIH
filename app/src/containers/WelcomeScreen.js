import React, { Component } from 'react';
import { connect } from 'react-redux'
import { search_drug } from '../actions'
import { Link } from 'react-router'
require('../../styles/index.scss')

class WelcomeScreen extends Component {
  render() {
    return (
      <div>
      <h1 style={{'text-align':'center'}}>RateNIH</h1>
      <h3 style={{'text-align':'center'}}>
       A platform to enable effective spending on publically-funded science
      </h3>
      </div>
    );
  }
}


export default WelcomeScreen
