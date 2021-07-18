import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { ImGithub } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import { VscClose } from 'react-icons/vsc';
import navbarImg from '../assets/images/navbar-img.svg';
import { motion } from 'framer-motion';

class Header extends Component {
	state = {
		isOpen: false,
		links: [
			{ id: 1, title: 'Home', to: '/' },
			{ id: 2, title: 'Portfolio', to: '/' },
			{ id: 3, title: 'About', to: '/' },
			{ id: 4, title: 'Contact', to: '/' },
		],
	};
	variants = {
		open: { x: 0 },
		closed: { x: '100vw' },
	};
	variants_2 = {
		open: { y: 0 },
		closed: { y: '100vw' },
	};
	variants_3 = {
		open: { y: -10 },
	};
	variants_4 = {
		open: { y: -10 },
		closed: { y: '-100vw'},
	};
	handleMenu() {
		this.setState({
			isOpen: true,
		});
	}

	handleCloseMenu() {
		if (this.state.isOpen) {
			setTimeout(() => {
				this.setState({
					isOpen: false,
				});
			}, 500);
		} else return;
	}

	render() {
		const { links, isOpen } = this.state;
		return (
			<header className='main-header'>
				<div className='header-main-container'>
					<div className='logo-container'>
						<a className='logo' href='#2'>
							Moise<span>.</span>
						</a>
					</div>
					<nav className={isOpen ? 'main-navbar open' : 'main-navbar'}>
						<div className='main-navbar-container'>
							<div className='menu-icon' onClick={() => this.handleMenu()}>
								<IconContext.Provider value={{ className: 'humberger' }}>
									<IoMdMenu />
								</IconContext.Provider>
							</div>
							<div
								className='close-icon'
								onClick={() => this.handleCloseMenu()}
							>
								<IconContext.Provider value={{ className: 'close' }}>
									<VscClose />
								</IconContext.Provider>
							</div>
							<div className='header-list'>
								<motion.div
									animate={isOpen ? 'open' : 'closed'}
									transition={{ duration: 2 }}
									variants={this.variants_3}
									className='navbar-img-wrapper'
								>
									<img src={navbarImg} alt='' />
								</motion.div>
								<motion.div
									animate={isOpen ? 'open' : 'closed'}
									transition={{ duration: 2 }}
									variants={this.variants}
									className='left-list-container'
								>
									<motion.ul 
														animate={isOpen ? 'open' : 'closed'}
														transition={{ duration: 2 }}
														variants={this.variants_4}
									className='social-media-list'>
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
									</motion.ul>
									<motion.ul
										animate={isOpen ? 'open' : 'closed'}
										transition={{ duration: 2 }}
										variants={this.variants}
										className='nav-list'
									>
										{links.map((link) => (
											<motion.li
												whileHover={{
													scale: 1.3,
													x: -80,
												}}
												transition={{ duration: 1 }}
												className='nav-link'
											>
												<motion.a
													whileHover={{
														color: '#cf000f',
													}}
													href='#1'
													className='active'
												>
													{link.title}
													<span>0{link.id}</span>
												</motion.a>
											</motion.li>
										))}
									</motion.ul>
								</motion.div>
							</div>
						</div>
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
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
