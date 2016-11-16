import React, { Component } from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux' 

class NavBar extends Component{
  render() {
    const { dispatch } = this.props
    return (
    <div>
    <Navbar>
    	<Navbar.Header>
	      	<Navbar.Brand>
	        	<a>rateNIH</a>
	      	</Navbar.Brand>
   		</Navbar.Header>
	    <Nav>
	      	<NavItem onClick = {()=>browserHistory.push('/welcome')} >Welcome</NavItem>
          <NavItem onClick = {()=>browserHistory.push('/plot1')} >Plot 1</NavItem>
          <NavItem onClick = {()=>browserHistory.push('/plot2')} >Plot 2</NavItem>
          <NavItem onClick = {()=>browserHistory.push('/plot3')} >Plot 3</NavItem>
      </Nav>
  	</Navbar>
  	        {this.props.children}
  	</div>
    );
  }
};


NavBar = connect()(NavBar)

export default NavBar
