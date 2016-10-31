import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import SearchScreen from '../containers/SearchScreen.js'
import Plot1Screen from '../components/Plot1Screen.js'
import Plot2Screen from '../components/Plot2Screen.js'

import NavBar from '../containers/NavBar'

module.exports = (
<Route path ="/" component={NavBar}>
	<IndexRoute component={SearchScreen} />
	<Route path="/search" component={SearchScreen}/>
	<Route path="/plot1" component={Plot1Screen}/>
	<Route path="/plot2" component={Plot2Screen}/>
</Route>
)