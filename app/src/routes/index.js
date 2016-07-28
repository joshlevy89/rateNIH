import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import SigninScreen from '../containers/SigninScreen'
import SearchScreen from '../containers/SearchScreen'
import PlacesAttendingScreen from '../containers/PlacesAttendingScreen'
import MyWallScreen from '../containers/MyWallScreen'
import NavBar from '../containers/NavBar'

module.exports = (
<Route path ="/" component={NavBar}>
	<IndexRoute component={SigninScreen} />
	<Route path="/signin" component={SigninScreen}/>
	<Route path="/signin/:urlUsername" component={SigninScreen}/>
	<Route path="/search" component={SearchScreen}/>
	<Route path="/mywall" component={MyWallScreen}/>
	<Route path="/places_attending" component={PlacesAttendingScreen}/>
</Route>
)