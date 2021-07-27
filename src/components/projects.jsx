import React, { Component } from 'react';
import { data } from '../services/data';
import count from '../assets/images/Counter.png';

class Projects extends Component {
	state = {
		data: [],
	};
	componentDidMount() {
		this.setState({
			data,
		});
	}
	render() {
		const { data } = this.state;
		const { onHandleProjectDetail } = this.props;
		return (
			<section className='main-section-project'>
				<div className='project-main-wrapper'>
					<h2 data-aos='fade-down-right' className='title'>
						{' '}
						Portfolio
					</h2>
					<p
						data-aos='fade-right'
						data-aos-offset='300'
						data-aos-easing='ease-in-sine'
						className='my'
					>
						QUALITY WORK RECENTLY DONE PROJECT 🥰
					</p>
					<ul className='card-list-container'>
						{data.map(
							({ id, title, image, type, development, year, detail, technologies,fullDesciption }) => (
								<li
									data-aos='flip-left'
									data-aos-easing='ease-out-cubic'
									data-aos-duration='2000'
									key={id}
									className='card'
								>
									<a class='img-wrapper' href='#2'>
										<img src={image} alt='tonic' />
									</a>
									<div class='right-content'>
										<div class='project-title'>
											<h2>{title}</h2>
										</div>
										<div class='info'>
											<span>{type}</span>
											<span>
												<img src={count} className='counter' alt='counter' />
											</span>
											<span>{development}</span>
											<span>
												<img src={count} className='counter' alt='counter' />
											</span>
											<span>{year}</span>
										</div>
										<div class='detail'>
											<p>{detail}</p>
										</div>
										<ul class='languages'>
											<li>
												<a href='#2'>react</a>
											</li>
											<li>
												<a href='#2'>Html</a>
											</li>
											<li>
												<a href='#2'>JS</a>
											</li>
										</ul>
										<div
											onClick={() =>
												onHandleProjectDetail({ id, title, image, type, development, year, detail, technologies,fullDesciption })
											}
											class='see-project'
										>
											<a class='btn' href='#2'>
												See Project
											</a>
										</div>
									</div>
								</li>
							)
						)}
					</ul>
				</div>
			</section>
		);
	}
}

export default Projects;
