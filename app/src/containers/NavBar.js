import React, { Component } from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux' 

class NavBar extends Component{
  render() {
    const { dispatch,user_name } = this.props
    return (
    <div>
    <Navbar>
    	<Navbar.Header>
	      	<Navbar.Brand>
	        	<a>Pinclone</a>
	      	</Navbar.Brand>
   		</Navbar.Header>
	    <Nav>
	      	<NavItem onClick = {()=>browserHistory.push('/signin')} >Sign In</NavItem>
	      	<NavItem onClick = {()=>browserHistory.push('/search')} >Search</NavItem>
	        <NavItem onClick = {()=>browserHistory.push('/wall/'+user_name)} >My Wall</NavItem>
      </Nav>
  	</Navbar>
  	        {this.props.children}
  	</div>
    );
  }
};

function mapStateToProps(state){
    return { user_name: state.user_info.user_name }
}

NavBar = connect(mapStateToProps)(NavBar)

export default NavBar
