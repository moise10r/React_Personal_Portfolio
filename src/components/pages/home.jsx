import React, { Component } from 'react';
import Header from '../header';
import HeadLine from '../headline';
import About from '../about';

import { IconContext } from 'react-icons';
import { ImGithub } from 'react-icons/im';
import { FiTwitter } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import Projects from '../projects';

class Home extends Component {
	state = {};
	render() {
		return (
			<div className='container'>
				<Header />
				<main>
					<HeadLine />
					<About />
					<Projects />
				</main>
				<div className='left-bar-icons'>
					<div className='bar'></div>
					<ul className='social-icons-list'>
						<li className='social-left-bar-icons-link'>
							<a href='#1'>
								<IconContext.Provider value={{ className: 'bar-icon' }}>
									<ImGithub />
								</IconContext.Provider>
							</a>
						</li>
						<li className='social-left-bar-icons-link'>
							<a href='#1'>
								<IconContext.Provider value={{ className: 'bar-icon' }}>
									<FiTwitter />
								</IconContext.Provider>
							</a>
						</li>
						<li className='social-left-bar-icons-link'>
							<a href='#1'>
								<IconContext.Provider value={{ className: 'bar-icon' }}>
									<GrLinkedinOption />
								</IconContext.Provider>
							</a>
						</li>
					</ul>
					<div className='bar last'></div>
				</div>
				<div className='rigth-scroll-bar'></div>
			</div>
		);
	}
}

export default Home;
