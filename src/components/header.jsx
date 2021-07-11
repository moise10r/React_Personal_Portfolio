import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { ImGithub } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import { VscClose } from 'react-icons/vsc';
import navbarImg from '../assets/images/navbar-img.svg';

class Header extends Component {
	state = {
		isOpen: false,
	};
	handleMenu() {
		const isOpen = this.state.isOpen;
		this.setState({
			isOpen: true,
		});
		console.log(this.state.isOpen);
	}
	render() {
		return (
			<header className='main-header'>
				<div className='header-main-container'>
					<div className='logo-container'>
						<a className='logo' href='#2'>
							Moise<span>.</span>
						</a>
					</div>
					<nav className='main-navbar' ref={this.menu}>
						<div className='main-navbar-container'>
							<div className='menu-icon' onClick={() => this.handleMenu()}>
								<IconContext.Provider value={{ className: 'humberger' }}>
									<IoMdMenu />
								</IconContext.Provider>
							</div>
							<div className='close-icon'>
								<IconContext.Provider value={{ className: 'close' }}>
									<VscClose />
								</IconContext.Provider>
							</div>
							<div className='header-list'>
								<div className='navbar-img-wrapper'>
									<img src={navbarImg} alt='' />
								</div>
								<ul className='nav-list'>
									<li className='nav-link'>
										<a href='#1' className='active'>
											Home<span>01</span>
										</a>
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
											<IconContext.Provider
												value={{ className: 'header-icon' }}
											>
												<FaFacebookF />
											</IconContext.Provider>
										</a>
									</li>
									<li className='social-media-link'>
										<a href='#2'>
											<IconContext.Provider
												value={{ className: 'header-icon' }}
											>
												<ImGithub />
											</IconContext.Provider>
										</a>
									</li>
									<li className='social-media-link'>
										<a href='#2'>
											<IconContext.Provider
												value={{ className: 'header-icon' }}
											>
												<FiTwitter />
											</IconContext.Provider>
										</a>
									</li>
									<li className='social-media-link'>
										<a href='#2'>
											<IconContext.Provider
												value={{ className: 'header-icon' }}
											>
												<GrLinkedinOption />
											</IconContext.Provider>
										</a>
									</li>
								</ul>
								<ul className='languages'>
									<li>
										<a href='#2'>EN</a>
									</li>
									<li>
										<a href='#2'>FR</a>
									</li>
									<li>
										<a href='#3'>moiserushanika2006@gmail.com</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
