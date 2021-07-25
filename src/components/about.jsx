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

class About extends Component {
	state = {
		isLangOpen: false,
		isFramOpen: false,
		languages: [
			{id:1, title: 'JavaScript', image: ellipse_1 },
			{id:2, title: 'Html', image: ellipse_2},
			{id:3, title: 'Css', image: ellipse_3 },
			{id:4, title: 'Scss', image: ellipse_3 },
			{id:4, title: 'Scss', image: ellipse_3 },
			{id:4, title: 'Scss', image: ellipse_3 },
			{id:4, title: 'Scss', image: ellipse_3 },
			{id:4, title: 'Scss', image: ellipse_3 },
			{id:4, title: 'Scss', image: ellipse_3 },
			{id:4, title: 'Scss', image: ellipse_3 },
			{id:4, title: 'Scss', image: ellipse_3 },
			{id:1, title: 'JavaScript', image: ellipse_1 },

		],
		frameWorks: [
			{id:1, title: 'React', image: ellipse_4 },
			{id:2, title: 'Nodejs', image: ellipse_5},
			{id:3, title: 'Jest', image: ellipse_6 },
		],
	};
	
	componentDidMount(){
		const lang = document.querySelectorAll('.lang');
		const chevrons = document.querySelectorAll('.lang-icon');
		let visibleLang = Math.ceil(lang.length/2);
		let i = 0;
		let movePer = 10.34;
		let maxMove =lang[1].offsetWidth/2 * movePer ;
		console.log(lang[1].offsetWidth);
		let rightMove = () => {
			i = i + movePer;
			if(lang === 1 ) { i = 0}
			for(const j of lang) { 
				if( i > maxMove){i = i - movePer}
				j.style.left = '-' + i + '%';
			}
		}
		let leftMove = () => {
			i = i - movePer;
			if(i <= 1 ) {
				console.log('less');
				i = 0
				}
			for(const j of lang) { 
				console.log(i);
				if( visibleLang > 1) {
					j.style.left = '-' + i + '%';
				}
			}
		}
		chevrons[1].addEventListener('click', () => rightMove() )
		chevrons[0].addEventListener('click', () => leftMove() )
	}

	render() {
	
		const { languages, frameWorks } = this.state;
		return (
			<section className='about'>
				<div className='about-me-main-section'>
					<h2 className='title'>
						About me<span>.</span>
					</h2>
					<div className='main-about-wrapper-one'>
						<div className='about-left-wrapper'>
							<p className='about-me-details'>
								Hello I’m a software developer! I can help you build a product ,
								feature or website Look through some of my work and experience!
								If you like what you see and have a project you need coded,
								don’t hestiate to contact me.
							</p>
							<a href='#2' className='about-connect'>
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
								<li className='social-media-link'>
									<a href='#2'>
										<IconContext.Provider value={{ className: 'about-icon' }}>
											<FaFacebookF />
										</IconContext.Provider>
									</a>
								</li>
								<li className='social-media-link'>
									<a href='#2'>
										<IconContext.Provider value={{ className: 'about-icon' }}>
											<ImGithub />
										</IconContext.Provider>
									</a>
								</li>
								<li className='social-media-link'>
									<a href='#2'>
										<IconContext.Provider value={{ className: 'about-icon' }}>
											<FiTwitter />
										</IconContext.Provider>
									</a>
								</li>
								<li className='social-media-link'>
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
									<span>Languages</span>
								</h3>
								<div className='about-rigth-list-wrapper '>
									<span className='carousel-icon-wrapper right' href='#2'>
										<IconContext.Provider
											value={{ className: 'carousel-icon lang-icon' }}
										>
											<FiChevronLeft />
										</IconContext.Provider>
									</span>
									<ul className='languages-list-container'>
										{
											languages.map(({image, id, title}) => (
											<li  key={id} className='language-link lang'>
											<div className='img-wrapper'>
												<img src={image} alt='langueage' />
											</div>
											<span>{title}</span>
										</li>))
										}
						
								</ul>
									<span className='carousel-icon-wrapper left' href='#2'>
										<IconContext.Provider value={{ className: 'carousel-icon lang-icon' }}>
											<FiChevronRight />
										</IconContext.Provider>
									</span>
								</div>
							</li>
							<li className='languages-list'>
								<h3 className='language-header'>
									<span>
										Frameworks & <strong className='under'>Libraries</strong>
									</span>
								</h3>
								<div className='about-rigth-list-wrapper '>
									<span className='carousel-icon-wrapper right' href='#2'>
										<IconContext.Provider
											value={{ className: 'carousel-icon icon-left' }}
										>
											<FiChevronLeft />
										</IconContext.Provider>
									</span>
									<ul className='languages-list-container'>
									{
											frameWorks.map(({id,image,title}) => (
											<li ref={this.lang} key={id} className='language-link fram'>
											<div className='img-wrapper'>
												<img src={image} alt='langueage' />
											</div>
											<span>{title}</span>
										</li>))
										}
						
									</ul>
									<span className='carousel-icon-wrapper left' href='#2'>
										<IconContext.Provider value={{ className: 'carsoul-icon' }}>
											<FiChevronRight />
										</IconContext.Provider>
									</span>
								</div>
							</li>
						</ul>
					</div>
					<div className='main-about-wrapper-two'>
						<div className='about-left-main-container'>
							<div className='experience-year'>
								<span>2</span>
								<span className='dot'></span>
							</div>
							<div className='year-paragraph'>
								<div className='left'></div>
								<div className='right'>
									<span>Year</span>
									<span>Experience</span>
									<span>Working</span>
								</div>
							</div>
						</div>
						<div className='about-right-main-container'>
							<h2 className='great-experience'>Great Experience</h2>
							<p className='detail'>
								Fill appear won't may make moveth signs. Fourth. Good own. Green
								you're moveth us, lesser.
							</p>
							<div className='progrees-container'>
								<div className='progress'>
									<div className='progress-container'>
										<span>Web design</span>
										<span>70%</span>
									</div>
									<div className='progress-bar'></div>
								</div>
								<div className='progress'>
									<div className='progress-container'>
										<span>Electronic</span>
										<span>85%</span>
									</div>
									<div className='progress-bar'></div>
								</div>
								<div className='progress'>
									<div className='progress-container'>
										<span>Web design</span>
										<span>90%</span>
									</div>
									<div className='progress-bar'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='short-video-section'>
					<div className='short-video-container'>
						<div className='about-img-wrapper'>
							<img src={about} alt='bg' />
						</div>
						<div className='play-container'>
							<div className='play'>
								<IconContext.Provider value={{ className: 'about-icon' }}>
									<IoMdPlay />
								</IconContext.Provider>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};
}

export default About;
