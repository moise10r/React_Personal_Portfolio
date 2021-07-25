import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { GiCircleClaws } from 'react-icons/gi';
import { MdLocationCity } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosSend } from 'react-icons/io';
class Contact extends Component {
	state = {};
	render() {
		return (
			<section className='contact-main-section'>
				<div className='contact-main-wrapper'>
					<h2 className='title'>Contact</h2>
					<p className='detail-info'>
						{' '}
						If you have an application you are interested in developing, a
						feature that you need built or a project that needs coding. I’d love
						to help with it
					</p>
          <p className="emojs">😆 😃 🤩</p>
					<div className='contact-main-wrapper'>
					
						<div className='main-contact-right-container'>
							<h3>Contact Info <span>.</span> </h3>
							<p className="show-info">
								Always available for freelance work if the write project comes
								along, Feel free to contact me
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
											<MdLocationCity />
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
							<form id="contact-form" action='/'>
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
                    placeholder="Message"
									></textarea>
								</div>
								<button type='submit' className='btn'>
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
