import React from 'react';
import './About.scss';

import {motion} from 'framer-motion';

const About = () => {
	return (
		<div id="about" className="app__flex">
			<motion.div
				whileInView={{y:[100, 0], opacity:[0,1]}}
				transition={{duration:0.5}}
				className="head-title">
				<p className="lg-text">Get to know</p>
				<h1 className="head-text">About Me</h1>
			</motion.div>

			<div className="aboutme__section">
				<motion.div
				whileInView={{y:[100, 0], opacity:[0,1]}}
				transition={{duration:0.5}}
				className="picture__section">
				
					<div  className="pp__div">
						<img src="me.jpg" className="profile__img" alt="profile__img"/>
					</div>

				</motion.div> 

				<motion.div
				whileInView={{x:[-100, 0], opacity:[0,1]}}
				transition={{duration:0.5}}
				className="aboutme-info__section">

					<div className="cards">
						<span className="card">Eager to Learn</span>
						<span className="card">Flexible</span>
						<span className="card">Good At Googling</span>
					</div>

					<p className="p-text">	
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>

					<div className="links">
						<button className="btn">More about me!</button>
					</div>
				</motion.div>
			</div>

		</div>
	);
}

export default About;