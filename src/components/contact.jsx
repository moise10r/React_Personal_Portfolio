import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { GiCircleClaws } from 'react-icons/gi';
import { MdLocationCity } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosSend } from 'react-icons/io';
import { BsCheckCircle } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm } from '@formspree/react';
import validations from '../utils';
import { motion } from 'framer-motion';

const Contact = () => {
	const [state, handleSubmit] = useForm('mrgrkgvy');
	const [value, setValue] = useState({
		name:'',
		email:'',
		message:''
	});

	const [isSent, setIsSent] = useState(false);

	const [errors, setErrors] = useState({});
	const handleChange = ({target:input}) => {
		setValue({
			...value,
			[input.name]: input.value
		})
	}
	const handleCloseToast = () => {
		setIsSent(false);
	}
	const handleSubmitFrom = (e) => {
		setErrors(validations(value));		
		if (!Object.keys(e).length) {
			setTimeout(() => {
				setValue({
					...value,
					name:'',
					email:'',
					message:''
				})
			}, 1000);
			setIsSent(true);
		}
	}

	const handleFromPrevent = (e) => {
			e.preventDefault();	
	}

	useEffect(() => {
		AOS.init({
			duration:2000
			});
	}, []);
	return (
			<section className='contact-main-section'>
				<div className='contact-main-wrapper'>
					<h2 data-aos='fade-down-right' className='title'>
						Contact
					</h2>
					<p
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='detail-info'
					>
						{' '}
						If you have an application you are interested in developing, a
						feature that you need built or a project that needs coding. I’d love
						to help with it
					</p>
					<p className='emojs'>😆 😃 🤩</p>
					{ isSent && <motion.div 	initial={{x:400}}	animate={{x:0}}
										transition={{ type: 'spring' }}
										className="toast-container">
					<span className="check-icon">
						<IconContext.Provider value={{ className: 'check' }}>
							<BsCheckCircle  />
							</IconContext.Provider>
					</span>
					<p className="toast-message">Message sent successfully</p>
					<span onClick={handleCloseToast} className="close-toast">
						<IconContext.Provider value={{ className: 'close' }}>
							<CgClose/>
							</IconContext.Provider>
					</span>
				</motion.div>}
					<div className='contact-main-wrapper'>
						<div className='main-contact-right-container'>
							<h3 data-aos='zoom-in-down'>
								Contact Info <span>.</span>{' '}
							</h3>
							<p data-aos='zoom-in-right' className='show-info'>
								Always available for freelance work if the right project comes
								along, Feel free to contact me
							</p>
							<div className='more-info'>
								<ul className='info-icons'>
									<li data-aos='fade-up-right' data-aos-duration='4000'>
										<IconContext.Provider value={{ className: 'icon' }}>
											<GiCircleClaws />
										</IconContext.Provider>
									</li>
									<li data-aos='fade-up-right' data-aos-duration='3000'>
										<IconContext.Provider value={{ className: 'icon' }}>
											<MdLocationCity />
										</IconContext.Provider>
									</li>{' '}
									<li data-aos='fade-up-right' data-aos-duration='2000'>
										<IconContext.Provider value={{ className: 'icon' }}>
											<FiPhoneCall />
										</IconContext.Provider>
									</li>{' '}
									<li data-aos='fade-up-right' data-aos-duration='1000'>
										<IconContext.Provider value={{ className: 'icon' }}>
											<IoIosSend />
										</IconContext.Provider>
									</li>
								</ul>
								<ul className='info-details'>
									<li>
										<span>Name</span>
										<p>NGANULO RUSHANIKA Moise</p>
									</li>
									<li>
										<span>Location</span>
										<p>752_st, Kigali-Rwanda</p>
									</li>
									<li>
										<span>Call Me</span>
										<p>+250 78 23 01 208</p>
									</li>
									<li>
										<span>Email Me</span>
										<p>moiserushanika2006@gmail.com </p>
									</li>
								</ul>
							</div>
						</div>
						<div className='main-contact-left-container'>
							<p>Message Me</p>
							<form  id='contact-form' onSubmit={!Object.keys(errors).length ? handleSubmit : (handleFromPrevent)} >
								<div
									data-aos='fade-left'
									data-aos-duration='1000'
									className='form-group'
								>
									<input type="text" onChange={handleChange} value={value.name} name="name" placeholder='Name' id="" />
								</div>
								{errors.name && (<p className="error-msg">{errors.name}</p>)}
								<div
									data-aos='fade-left'
									data-aos-duration='2000'
									className='form-group'
								>
									<input  type="email"  onChange={handleChange} value={value.email} name="email" placeholder='Email' id="" />
								</div>
								{errors.email && (<p className="error-msg">{errors.email}</p>)}
								<div
									data-aos='fade-left'
									data-aos-duration='2500'
									className='form-group'
								>
								<textarea name="message" value={value.message}  onChange={handleChange} id="message" placeholder='Message' cols="30" rows="10" ></textarea>
								</div>
								{errors.message && (<p className="error-msg">{errors.message}</p>)}
								<button
									data-aos='fade-up'
									data-aos-anchor-placement='center-bottom'
									type='submit'
									className='btn'
									disabled={state.submitting}
									onClick={() => handleSubmitFrom(errors)}
								>
									Get In Touch
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
}

export default Contact;
