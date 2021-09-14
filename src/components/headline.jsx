import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineDisconnect } from 'react-icons/ai';
import headlineImg from '../assets/images/headline_bg.svg';
import { motion } from 'framer-motion';

const HeadLine = () => {
	return (
		<section className='headline-section' id="home" title ='home'>
			<div className='main-healine-container container'>
				<div className='headline-left-container'>
					<motion.h1
						initial={{ x: '100vh' }}
						animate={{ x: 10 }}
						transition={{ duration: 1.7 }}
						className='me'
					>
						I'm Moise Glad to see you <span>!</span>
					</motion.h1>
					<motion.p
						initial={{ x: '100vh' }}
						animate={{ x: 10 }}
						transition={{ duration: 2 }}
						className='about-me'
					>
						I’m a software developer! I can help you build a product , feature
						or website Look through some of my work and experience! If you like
						what you see and have a project you need coded, don’t hestiate to
						contact me.
					</motion.p>
					<div className='connections'>
						<motion.a
							initial={{ y: 1000 }}
							animate={{ y: 10 }}
							transition={{ duration: 2.5 }}
							href='#2'
							className='btn-resume'
						>
							Resume
						</motion.a>
						<motion.a
							href='https://www.linkedin.com/in/nganulo-rushanika-mo%C3%AFse-626139197/'
							initial={{ y: 1000 }}
							animate={{ y: 10 }}
							transition={{ duration: 3 }}
							className='connect'
						>
							LET'S CONNECT
							<span>
								<IconContext.Provider value={{ className: 'connect-icon' }}>
									<AiOutlineDisconnect />
								</IconContext.Provider>
							</span>
						</motion.a>
					</div>
				</div>
				<motion.div
					initial={{ y: 1000 }}
					animate={{ y: 10 }}
					transition={{ duration: 3 }}
					className='headline-img'
				>
					<img src={headlineImg} alt='' />
				</motion.div>
			</div>
		</section>
	);
};

export default HeadLine;
