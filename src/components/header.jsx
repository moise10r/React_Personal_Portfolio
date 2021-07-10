import React, { Component } from 'react';
import NavBar from './navbar';

class Header extends Component {
	state = {};
	render() {
		return (
			<header className='main-header'>
				<NavBar />
			</header>
		);
	}
}

export default Header;
