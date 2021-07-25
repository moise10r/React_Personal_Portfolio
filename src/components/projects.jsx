import React, { Component } from 'react';
import { data } from '../services/data';
import ellipse_4 from '../assets/images/Portfolio_4.png';
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
		return (
			<section className='main-section-project'>
				<div className='project-main-wrapper'>
					<h2 className='title'> Portfolio</h2>
					<p className='my'>QUALITY WORK RECENTLY DONE PROJECT 🥰</p>
					<ul className='card-list-container'>
						{data.map(
							({ id, title, image, description, detail, technologies }) => (
								<li className='card'>
									<a class='img-wrapper' href='#2'>
										<img src={image} alt='tonic' />
									</a>
									<div class='right-content'>
										<div class='project-title'>
											<h2>{title}</h2>
										</div>
										<div class='info'>
											<span>{description.type}</span>
											<span>
												<img src={count} className='counter' alt='counter' />
											</span>
											<span>{description.development}</span>
											<span>
												<img src={count} className='counter' alt='counter' />
											</span>
											<span>{description.year}</span>
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
										<div class='see-project'>
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
