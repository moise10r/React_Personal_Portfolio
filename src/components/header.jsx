import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { ImGithub } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';

class Header extends Component {
	state = {};
	render() {
		return (
			<header className='main-header'>
				<div className='header-main-container'>
					<div className='logo-container'>
						<a className='logo' href='#2'>
							Moise<span>.</span>
						</a>
					</div>
					<nav className='main-navbar'>
						<div className='main-navbar-container'>
							<div className='menu-icon'>
								<IconContext.Provider value={{ className: 'humberger' }}>
									<IoMdMenu />
								</IconContext.Provider>
							</div>
							<ul className='nav-list'>
								<li className='nav-link'>
									<a href='#1'>Home</a>
								</li>
								<li className='nav-link'>
									<a href='#2'>Portfolio</a>
								</li>
								<li className='nav-link'>
									<a href='#3'>About</a>
								</li>
								<li className='nav-link'>
									<a href='#4'>Contact</a>
								</li>
							</ul>
							<ul className='social-media-list'>
								<li className='social-media-link'>
									<a href='#2'>
										<IconContext.Provider value={{ className: 'header-icon' }}>
											<FaFacebookF />
										</IconContext.Provider>
									</a>
								</li>
								<li className='social-media-link'>
									<a href='#2'>
										<IconContext.Provider value={{ className: 'header-icon' }}>
											<ImGithub />
										</IconContext.Provider>
									</a>
								</li>
								<li className='social-media-link'>
									<a href='#2'>
										<IconContext.Provider value={{ className: 'header-icon' }}>
											<FiTwitter />
										</IconContext.Provider>
									</a>
								</li>
								<li className='social-media-link'>
									<a href='#2'>
										<IconContext.Provider value={{ className: 'header-icon' }}>
											<GrLinkedinOption />
										</IconContext.Provider>
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
