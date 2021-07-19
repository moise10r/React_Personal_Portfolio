import React from 'react';

const About = () => {
	return (
		<section className='about'>
			<div className="about-me-main-section">
      <h2 className='title'>
            About <span>.</span>
          </h2>
        <div className='main-about-wrapper container'>
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
