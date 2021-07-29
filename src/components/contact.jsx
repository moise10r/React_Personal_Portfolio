import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { GiCircleClaws } from 'react-icons/gi';
import { MdLocationCity } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosSend } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Input from './common/input';
class Contact extends Component {
	state = {
		user: {
			name: '',
			email: '',
			message: ''
		}
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit');
	}

	handleChange = ({target: input}) => {
		const user = {...this.state.user} 
		user[input.name] = input.value
		this.setState({
			user
		})
	}

	componentDidMount() {
		AOS.init({
			duration: 2000,
		});
	}

	render() {
		const { name, email , message} = this.state
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
							<form id='contact-form' onSubmit={this.handleSubmit}>
								<div
									data-aos='fade-left'
									data-aos-duration='1000'
									className='form-group'
								>
									<Input onChange={this.handleChange} name='name' placeholder='Your Name' value={name}/>
								</div>
								<div
									data-aos='fade-left'
									data-aos-duration='2000'
									className='form-group'
								>
									<Input onChange={this.handleChange} name='email' placeholder='Your Email' value={email}/>
								</div>
								<div
									data-aos='fade-left'
									data-aos-duration='2500'
									className='form-group'
								>
									<textarea
										name='message'
										id='message'
										onChange={this.handleChange}
										value={message}
										cols='30'
										rows='10'
										placeholder='Message'
									></textarea>
								</div>
								<button
									data-aos='fade-up'
									data-aos-anchor-placement='center-bottom'
									type='submit'
									className='btn'
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
}

export default Contact;
