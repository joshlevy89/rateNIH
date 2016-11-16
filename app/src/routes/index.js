import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import WelcomeScreen from '../containers/WelcomeScreen.js'
import Plot1Screen from '../components/Plot1Screen.js'
import Plot2Screen from '../components/Plot2Screen.js'
import Plot3Screen from '../components/Plot3Screen.js'


import NavBar from '../containers/NavBar'

module.exports = (
<Route path ="/" component={NavBar}>
	<IndexRoute component={WelcomeScreen} />
	<Route path="/welcome" component={WelcomeScreen}/>
	<Route path="/plot1" component={Plot1Screen}/>
	<Route path="/plot2" component={Plot2Screen}/>
	<Route path="/plot3" component={Plot3Screen}/>
</Route>
)