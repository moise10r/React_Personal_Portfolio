import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { GiCircleClaws } from 'react-icons/gi';
import { GrMapLocation } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosSend } from 'react-icons/io';
class Contact extends Component {
	state = {};
	render() {
		return (
			<section className='contact-main-section'>
				<h2 className='title'>Contact</h2>
				<div className='contact-main-wrapper'>
					<div className='main-contact-left-container'>
						<p>Message Me</p>
						<form action='/'>
							<div className='form-group'>
								<input type='text' name='name' placeholder='Your Name' />
							</div>
							<div className='form-group'>
								<input type='text' name='email' placeholder='Your Email' />
							</div>
							<div className='form-group'>
								<textarea
									name='message'
									id='message'
									cols='30'
									rows='10'
								></textarea>
							</div>
							<button type='submit' className='btn'>
								Get In Touch
							</button>
						</form>
					</div>
					<div className='main-contact-right-container'>
						<h3>Contact Info</h3>
						<p>
							If you have an application you are interested in developing, a
							feature that you need built or a project that needs coding. I’d
							love to help with it
						</p>
						<div className='more-info'>
							<ul className='info-icons'>
								<li>
									<IconContext.Provider value={{ className: 'icon' }}>
										<GiCircleClaws />
									</IconContext.Provider>
								</li>
								<li>
									<IconContext.Provider value={{ className: 'icon' }}>
										<GrMapLocation />
									</IconContext.Provider>
								</li>{' '}
								<li>
									<IconContext.Provider value={{ className: 'icon' }}>
										<FiPhoneCall />
									</IconContext.Provider>
								</li>{' '}
								<li>
									<IconContext.Provider value={{ className: 'icon' }}>
										<IoIosSend />
									</IconContext.Provider>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
