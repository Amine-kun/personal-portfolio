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
						<span className="card app__flex">Eager to Learn</span>
						<span className="card app__flex">Flexible</span>
						<span className="card app__flex">Good At Googling</span>
					</div>

					<p className="p-text about-text">	
						Hello There! My name is Amine. A guy ejoying <b className="blue-text">bringing creative designs</b> to life and whom he find pleasure in <b className="blue-text">solving problems</b>.<br /><br />
						My interest in Web Dev started when i felt that something is missing, i needed to to bring my designs to reality, making them fully interactive.<br /><br />
						One of my qualities that i can humbly flex, is that im <b className="blue-text">very Flexible</b>, and can easily learn to work with any new <b className="blue-text">technologies</b>.
					</p>

					{/*<div className="links  about-text">
						<button className="btn">More about me!</button>
					</div>*/}
				</motion.div>
			</div>

		</div>
	);
}

export default About;