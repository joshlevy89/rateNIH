import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import SigninScreen from '../containers/SigninScreen'
import SearchScreen from '../containers/SearchScreen'
import WallScreen from '../containers/WallScreen'
import NavBar from '../containers/NavBar'

module.exports = (
<Route path ="/" component={NavBar}>
	<IndexRoute component={SigninScreen} />
	<Route path="/signin" component={SigninScreen}/>
	<Route path="/signin/:urlUsername" component={SigninScreen}/>
	<Route path="/search" component={SearchScreen}/>
	<Route path="/wall/:user" component={WallScreen}/>
</Route>
)