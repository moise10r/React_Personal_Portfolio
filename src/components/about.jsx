import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { ImGithub } from 'react-icons/im';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import { IoMdPlay } from 'react-icons/io';
import ellipse_1 from '../assets/images/Ellipse_1.png';
import ellipse_2 from '../assets/images/Ellipse_2.png';
import ellipse_3 from '../assets/images/Ellipse_3.png';
import ellipse_4 from '../assets/images/react.png';
import ellipse_5 from '../assets/images/nodejs.png';
import ellipse_6 from '../assets/images/jest.png';
import about from '../assets/images/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

class About extends Component {
	state = {
		isLangOpen: false,
		isFramOpen: false,
		languages: [
			{ id: 1, title: 'JavaScript', image: ellipse_1 },
			{ id: 2, title: 'Html', image: ellipse_2 },
			{ id: 3, title: 'Css', image: ellipse_3 },
			{ id: 4, title: 'Scss', image: ellipse_3 },
			{ id: 4, title: 'Scss', image: ellipse_3 },
			{ id: 4, title: 'Scss', image: ellipse_3 },
			{ id: 4, title: 'Scss', image: ellipse_3 },
			{ id: 4, title: 'Scss', image: ellipse_3 },
			{ id: 4, title: 'Scss', image: ellipse_3 },
			{ id: 4, title: 'Scss', image: ellipse_3 },
			{ id: 4, title: 'Scss', image: ellipse_3 },
			{ id: 1, title: 'JavaScript', image: ellipse_1 },
		],
		frameWorks: [
			{ id: 1, title: 'React', image: ellipse_4 },
			{ id: 2, title: 'Nodejs', image: ellipse_5 },
			{ id: 3, title: 'Jest', image: ellipse_6 },
			{ id: 3, title: 'Jest', image: ellipse_6 },
			{ id: 3, title: 'Jest', image: ellipse_6 },
		],
	};

	componentDidMount() {
		AOS.init();
		const lang = document.querySelectorAll('.lang');
		const fram = document.querySelectorAll('.fram');
		const chevrons = document.querySelectorAll('.lang-icon');
		const chevrons2 = document.querySelectorAll('.carsoul-icon-fram');
		let visibleLang = Math.ceil(lang.length / 2);
		let visibleFram = Math.ceil(fram.length / 2);
		let i = 0;
		let movePer = 10.34;
		let maxMove = (lang[1].offsetWidth / 2) * movePer;
		let i2 = 0;
		let movePer2 = 10.34;
		let maxMove2 = (fram[1].offsetWidth / 2) * movePer2;
		const rightMove1 = () => {
			i = i + movePer;
			if (lang === 1) {
				i = 0;
			}
			for (const j of lang) {
				if (i > maxMove) {
					i = i - movePer;
				}
				j.style.left = '-' + i + '%';
			}
		};
		const leftMove1 = () => {
			i = i - movePer;
			if (i <= 1) {
				i = 0;
			}
			for (const j of lang) {
				console.log(i);
				if (visibleLang > 1) {
					j.style.left = '-' + i + '%';
				}
			}
		};
		const rightMove2 = () => {
			i2 = i2 + movePer2;
			if (fram === 1) {
				i2 = 0;
			}
			for (const j of fram) {
				if (i2 > maxMove2) {
					i2 = i2 - movePer2;
				}
				j.style.left = '-' + i2 + '%';
			}
		};
		const leftMove2 = () => {
			i2 = i2 - movePer2;
			if (i2 <= 1) {
				i2 = 0;
			}
			for (const j of fram) {
				console.log(i);
				if (visibleFram > 1) {
					j.style.left = '-' + i2 + '%';
				}
			}
		};
		chevrons[1].addEventListener('click', () => {
			rightMove1();
		});
		chevrons[0].addEventListener('click', () => {
			leftMove1();
		});
		chevrons2[1].addEventListener('click', () => {
			rightMove2();
		});
		chevrons2[0].addEventListener('click', () => {
			leftMove2();
		});
	}

	render() {
		const { languages, frameWorks } = this.state;
		const { onClick } = this.props;
		return (
			<section id='about' title="about" className='about'>
				<div className='about-me-main-section'>
					<h2 data-aos='fade-down-right' className='title'>
						About me<span>.</span>
					</h2>
					<div className='main-about-wrapper-one'>
						<div className='about-left-wrapper'>
							<p data-aos='zoom-in-right' className='about-me-details'>
								Hello I’m a software developer! I can help you build a product ,
								feature or website Look through some of my work and experience!
								If you like what you see and have a project you need coded,
								don’t hestiate to contact me.
							</p>
							<a
								data-aos='fade-right'
								data-aos-easing='ease-in-sine'
								href='#2'
								className='about-connect'
							>
								<span>Let's connect</span>
								<span>
									<IconContext.Provider
										value={{ className: 'about-connect-icon' }}
									>
										<HiChevronDoubleLeft />
									</IconContext.Provider>
								</span>
							</a>
							<ul className='about-social-icon-list'>
								<li
									data-aos='fade-up-right'
									data-aos-duration='1000'
									className='social-media-link'
								>
									<a href='https://www.facebook.com/moiseMrnrushanika'>
										<IconContext.Provider value={{ className: 'about-icon' }}>
											<FaFacebookF />
										</IconContext.Provider>
									</a>
								</li>
								<li
									data-aos='fade-up-right'
									data-aos-duration='4000'
									className='social-media-link'
								>
									<a href='https://github.com/moise10r'>
										<IconContext.Provider value={{ className: 'about-icon' }}>
											<ImGithub />
										</IconContext.Provider>
									</a>
								</li>
								<li
									data-aos='fade-up-right'
									data-aos-duration='7000'
									className='social-media-link'
								>
									<a href='#2'>
										<IconContext.Provider value={{ className: 'about-icon' }}>
											<FiTwitter />
										</IconContext.Provider>
									</a>
								</li>
								<li
									data-aos='fade-up-right'
									data-aos-duration='10000'
									className='social-media-link'
								>
									<a href='#2'>
										<IconContext.Provider value={{ className: 'about-icon' }}>
											<GrLinkedinOption />
										</IconContext.Provider>
									</a>
								</li>
							</ul>
						</div>
						<ul className='about-rigth-wrapper'>
							<li className='languages-list'>
								<h3 className='language-header'>
									<span data-aos='zoom-in' className='skill-title'>
										Languages
									</span>

									<span className='icons'>
										<span
											data-aos='zoom-out-left'
											data-aos-duration='5000'
											className='carousel-icon-wrapper  lang-icon'
											href='#2'
										>
											<IconContext.Provider
												value={{ className: 'carousel-icon' }}
											>
												<FiChevronLeft />
											</IconContext.Provider>
										</span>
										<span
											data-aos='zoom-out-left'
											data-aos-duration='10000'
											className='carousel-icon-wrapper  lang-icon'
											href='#2'
										>
											<IconContext.Provider
												value={{ className: 'carousel-icon' }}
											>
												<FiChevronRight />
											</IconContext.Provider>
										</span>
									</span>
								</h3>
								<div className='about-rigth-list-wrapper '>
									<ul className='languages-list-container'>
										{languages.map(({ image, id, title }) => (
											<li
												data-aos='flip-left'
												data-aos-easing='ease-out-cubic'
												data-aos-duration='10000'
												key={id}
												className='language-link lang'
											>
												<div className='img-wrapper'>
													<img src={image} alt='langueage' />
												</div>
												<span>{title}</span>
											</li>
										))}
									</ul>
								</div>
							</li>
							<li className='languages-list'>
								<h3 className='language-header'>
									<span data-aos='zoom-in' className='skill-title'>
										Frameworks & <strong className='under'>Libraries</strong>
									</span>
									<span className='icons'>
										<span
											data-aos='zoom-out-left'
											data-aos-duration='5000'
											className='carousel-icon-wrapper carsoul-icon-fram'
											href='#2'
										>
											<IconContext.Provider value={{ className: 'icon' }}>
												<FiChevronLeft />
											</IconContext.Provider>
										</span>
										<span
											data-aos='zoom-out-left'
											data-aos-duration='10000'
											className='carousel-icon-wrapper carsoul-icon-fram'
											href='#2'
										>
											<IconContext.Provider value={{ className: 'icon' }}>
												<FiChevronRight />
											</IconContext.Provider>
										</span>
									</span>
								</h3>
								<div className='about-rigth-list-wrapper '>
									<ul className='languages-list-container'>
										{frameWorks.map(({ id, image, title }) => (
											<li
												data-aos='flip-left'
												data-aos-easing='ease-out-cubic'
												data-aos-duration='10000'
												key={id}
												className='language-link fram'
											>
												<div className='img-wrapper'>
													<img src={image} alt='langueage' />
												</div>
												<span>{title}</span>
											</li>
										))}
									</ul>
								</div>
							</li>
						</ul>
					</div>
					<div className='main-about-wrapper-two'>
						<div className='about-left-main-container'>
							<div data-aos='fade-right' className='experience-year'>
								<span>2</span>
								<span className='dot'></span>
							</div>
							<div className='year-paragraph'>
								<div className='left'></div>
								<div data-aos='fade-up-right' className='right'>
									<span>Year</span>
									<span>Experience</span>
									<span>Working</span>
								</div>
							</div>
						</div>
						<div className='about-right-main-container'>
							<h2 data-aos='fade-down-left' className='great-experience'>
								Great Experience
							</h2>
							<p data-aos='zoom-in-up' className='detail'>
								I have serious passion for UI effects, animations and creating
								intuitive, dynamic user experiences.
							</p>
							<div className='progrees-container'>
								<div
									data-aos='zoom-out-left'
									data-aos-duration='10000'
									className='progress'
								>
									<div className='progress-container'>
										<span>Web design</span>
										<span>80%</span>
									</div>
									<div className='progress-bar'></div>
								</div>
								<div
									data-aos='zoom-out-left'
									data-aos-duration='20000'
									className='progress'
								>
									<div className='progress-container'>
										<span>Electronic</span>
										<span>75%</span>
									</div>
									<div className='progress-bar'></div>
								</div>
								<div
									data-aos='zoom-out-left'
									data-aos-duration='30000'
									className='progress'
								>
									<div className='progress-container'>
										<span>Problem solving</span>
										<span>70%</span>
									</div>
									<div className='progress-bar'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='short-video-section'>
					<div className='short-video-container'>
						<div data-aos='zoom-in' className='about-img-wrapper'>
							<img src={about} alt='bg' />
						</div>
						<div className='play-container'>
							<div onClick={() => onClick()} className='play'>
								<IconContext.Provider value={{ className: 'about-icon' }}>
									<IoMdPlay />
								</IconContext.Provider>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
