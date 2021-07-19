import React from 'react';
import { IconContext } from 'react-icons';
import { ImGithub } from 'react-icons/im';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiChevronDown } from 'react-icons/fi';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import ellipse_1 from '../assets/images/Ellipse_1.png';
import ellipse_2 from '../assets/images/Ellipse_2.png';
import ellipse_3 from '../assets/images/Ellipse_3.png';

const About = () => {
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
							feature or website Look through some of my work and experience! If
							you like what you see and have a project you need coded, don’t
							hestiate to contact me.
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
					<div className='about-rigth-wrapper'>
						<ul className='languages-list'>
							<h3 className="language-header">
								<span>Languages</span>
								<span>
									<IconContext.Provider value={{ className: 'about-icon' }}>
										<FiChevronDown />
									</IconContext.Provider>
								</span>
							</h3>
							<li className='language-link'>
								<img src={ellipse_1} alt='langueage' />
                <span>JavaScript</span>
							</li>
							<li className='language-link'>
								<img src={ellipse_2} alt='langueage' />
                <span>Html</span>
							</li>
							<li className='language-link'>
								<img src={ellipse_3} alt='langueage' />
                <span>Css</span>
							</li>
						</ul>
					</div>
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
		</section>
	);
};

export default About;
