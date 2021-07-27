import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { ImGithub } from 'react-icons/im';
import { FiTwitter } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import Header from '../header';
import HeadLine from '../headline';
import About from '../about';
import Projects from '../projects';
import Contact from '../contact';

class Home extends Component {
	state = {};
	componentDidMount() {
		const progressBar = document.querySelector('.home-progress-bar');
		function updateProgressBar() {
			console.log(getProgressPercentage());
			progressBar.style.height = `${getProgressPercentage()}vh`;
			progressBar.style.maxHeight = '100%';
			if (getProgressPercentage() > 0) {
				progressBar.style.background = 'red';
			}
			requestAnimationFrame(updateProgressBar);
		}
		function getProgressPercentage() {
			return (
				(window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
				100
			);
		}
		updateProgressBar();
	}
	render() {
		return (
			<div className='container'>
				<Header />
				<main>
					<HeadLine />
					<About />
					<Projects />
					<Contact />
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
							<a href='https://twitter.com/MRushanika'>
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
				<div className='rigth-scroll-bar'>
					<div className='home-progress-bar'></div>
				</div>
			</div>
		);
	}
}

export default Home;
