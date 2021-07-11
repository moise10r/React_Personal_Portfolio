import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineDisconnect } from 'react-icons/ai';
import headlineImg from '../assets/images/headline_bg.svg';

const HeadLine = () => {
	return (
		<section className='headline-section'>
			<div className='main-healine-container'>
				<div className='headline-left-container'>
					<h1 className='me'>
						I'm Moise Glad to see you <span>!</span>
					</h1>
					<p className='about-me'>
						I’m a software developer! I can help you build a product , feature
						or website Look through some of my work and experience! If you like
						what you see and have a project you need coded, don’t hestiate to
						contact me.
					</p>
					<div className='connections'>
						<a href='#2' className='btn-resume'>
							Resume
						</a>
						<a href='#3' className='connect'>
							LET'S CONNECT
							<span>
								<IconContext.Provider value={{ className: 'connect-icon' }}>
									<AiOutlineDisconnect />
								</IconContext.Provider>
							</span>
						</a>
					</div>
				</div>
				<div className='headline-img'>
					<img src={headlineImg} alt='' />
				</div>
			</div>
		</section>
	);
};

export default HeadLine;
