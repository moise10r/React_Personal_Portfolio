import React, { Component } from 'react';
import Header from '../header';
import HeadLine from '../headline';

import { IconContext } from 'react-icons';
import { ImGithub } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';

class Home extends Component {
	state = {};
	render() {
		return (
			<div class='container'>
				<Header />
				<main>
					<HeadLine />
				</main>
				<div className='left-bar-icons'>
					<div className='first-bar'></div>
					<ul className='social-icons-list'>
						<li className='social-left-bar-icons-link'>
							<a href='#1'></a>
						</li>
					</ul>
					<div className='last-bar'></div>
				</div>
				<div className='rigth-scroll-bar'></div>
			</div>
		);
	}
}

export default Home;
