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
import counter from '../../assets/images/Counter.png';
import { VscClose } from 'react-icons/vsc';
import VideoPlayer from 'react-video-js-player';
import Radar from '../../assets/images/motivation.mp4';

class Home extends Component {
	state = {
		item:{},
		isOpen:false,
		start: false
	};
	progressBar = React.createRef();
	componentDidMount() {
		const bar = this.progressBar.current;
		function updateProgressBar() {
			bar.style.height = `${getProgressPercentage()}%`;
			bar.style.maxHeight = '100%';
			if (getProgressPercentage() > 0) {
				bar.style.background = 'red';
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
	
	handleProjectDetail = (item) => {
		this.setState({
			item,
			isOpen:true
		})
	}	
	handleClosePop = () => {
		this.setState({
			isOpen:false
		});
	}
	handleWatch = () => {
		this.setState({
			start:true
		})
	}
	handleCloseVideo = () => {
		this.setState({
			start: false
		})
	}
	render() {
		const { item ,isOpen, start } = this.state;
		console.log(isOpen);
		const poster =
			'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fradar-localization-18739819.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Froyalty-free-stock-images-radar-localization-image18739819&tbnid=V53swVz5QAemoM&vet=12ahUKEwj7o5LwtYTyAhURQBoKHQT5Cj0QMygZegUIARCPAg..i&docid=OoVm1s3AFl2GzM&w=800&h=800&q=radar&ved=2ahUKEwj7o5LwtYTyAhURQBoKHQT5Cj0QMygZegUIARCPAg';
		return (
			<React.Fragment>
				<div className={!isOpen ? 'container' : 'container open'}>
					<Header />
					<main>
						<HeadLine />
						<About onClick={this.handleWatch} />
						<Projects onHandleProjectDetail={this.handleProjectDetail} />
						<Contact />
					</main>
					<div className='left-bar-icons'>
						<div className='bar'></div>
						<ul className='social-icons-list'>
							<li className='social-left-bar-icons-link'>
								<a href='https://github.com/moise10r'>
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
								<a href='https://www.linkedin.com/in/nganulo-rushanika-mo%C3%AFse-626139197/'>
									<IconContext.Provider value={{ className: 'bar-icon' }}>
										<GrLinkedinOption />
									</IconContext.Provider>
								</a>
							</li>
						</ul>
						<div className='bar last'></div>
					</div>
					<div className='rigth-scroll-bar'>
						<div ref={this.progressBar} className='home-progress-bar'></div>
					</div>
				</div>
				<div
					className={
						isOpen ? 'card-popup-window' : 'card-popup-window open-pop-up'
					}
				>
					<div className='popup-main-container'>
						<div className='main-container'>
							<div className='title'>
								<h2 id='pop-title'>{item.title}</h2>
							</div>
							<div className='info'>
								<span>{item.type}</span>
								<span>
									<img src={counter} alt='counter' />
								</span>
								<span>{item.development}</span>
								<span>
									<img src={counter} alt='counter' />
								</span>
								<span>{item.year}</span>
							</div>
							<div className='portfolio-img'>
								<img src={item.image} alt='tonic' />
							</div>
							<div className='left-container'>
								<div className='detail'>
									<p>{item.fullDesciption}</p>
								</div>
								<div className='about-links'>
							{	isOpen &&	<ul className='languages' id='lang'>
										{item.technologies.map((element,index) => (
										<li key={index} > <a href="#2">{element}</a></li>
									))} 
									</ul>}
									<div className='links'>
										<a href={item.liveDemo} className='btn'>
											<span>see live</span>
											<span>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='18'
													height='18'
													viewBox='0 0 18 18'
													fill='#cf000f'
												>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z'
														fill='#cf000f'
													/>
												</svg>
											</span>
										</a>
										<a href={item.sourceCode} className='btn'>
											<span>source code</span>{' '}
											<span>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='18'
													height='20'
													viewBox='0 0 18 20'
													fill='#cf000f'
												>
													<path
														d='M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z'
														fill='#cf000f'
													/>
												</svg>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className='close-icon' onClick={() => this.handleClosePop()}>
								<IconContext.Provider value={{ className: 'icon' }}>
									<VscClose />
								</IconContext.Provider>
							</div>
						</div>
					</div>
					<div className='bar'></div>
				</div>
				<div
					className={!start ? 'video-container' : 'video-container open-video'}
				>
					<div className='video-content-wrapper'>
						<VideoPlayer src={Radar} poster={poster} height='500' width='620' />
						<div
							className='close-video'
							onClick={() => this.handleCloseVideo()}
						>
							<IconContext.Provider value={{ className: 'icon' }}>
								<VscClose />
							</IconContext.Provider>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
