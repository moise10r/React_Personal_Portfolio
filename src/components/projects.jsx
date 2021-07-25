import React, { Component } from 'react';
import { data } from '../services/data';
import ellipse_4 from '../assets/images/Portfolio_4.png';

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
		const { data } = this.state
		return (
			<section className='main-section-project'>
				<div className="project-main-wrapper">
					<h2 className='title'> Portfolio</h2>
					<ul className="card-list-container">
						{/* { 
							data.map(({id, image, title, description, fullDescription}) => (
								<li className="card">
									<a href="#2" className="img-wrapper">
										<img src={image} alt="card"  />
									</a>
								</li>
							))
						} */}
						<li className="card">
							<a href="#2" className="img-wrapper">
								{/* <img src={ellipse_4} alt="" srcset="" /> */}
							</a>
							</li>
					</ul>

				</div>
			</section>
		);
	}
}

export default Projects;
