import React from 'react';
import './Skills.scss';

import {motion} from 'framer-motion';
import {DiJavascript1, DiPython} from 'react-icons/di';
import {BsPatchCheckFill} from 'react-icons/bs';
import {SiTypescript} from 'react-icons/si';

const frontEnd=["ReactJS","NextJS","jQuery","HTML5","CSS3","SCSS","Bootstrap","TailwindCSS"];
const backEnd=["NodeJS","Django", "Flask","PostgreSQL","MongoDB","Firebase"];
const design=["Photoshop","Illustrator","Canva","Figma"];

const Skills = ({isDarkMode}) => {
	return (
		<div id="experience" className="app__flex">
			<motion.div
				whileInView={{y:[100, 0], opacity:[0,1]}}
				transition={{duration:0.5}}
				className="head-title">
				<p className="lg-text">What i can work with</p>
				<h1 className="head-text">My experiences</h1>
			</motion.div>
			<motion.div
				whileInView={{y:[100, 0], opacity:[0,1]}}
				transition={{duration:0.5}}
				className={isDarkMode ? "exp__icons app__flex" : "exp__icons app__flex light-text"}>
						<DiJavascript1 className="stack-icons"/>
						<SiTypescript className="stack-icons"/>
						<DiPython className="stack-icons"/>
			</motion.div>
			<motion.div
				whileInView={{y:[100, 0], opacity:[0,1]}}
				transition={{duration:1, delayChildren:2}}
				className="stacks">

				<div className="skills__stack frontend">
					<h3 className={isDarkMode ? "head-stack app__flex" : "head-stack app__flex light-text light-bg"}>Front end</h3>	
					<div className="skills__content">
						{frontEnd.map((tech)=>
							<article className="skills__details" key={tech}>
								<BsPatchCheckFill/>
									<div>
										<h4>{tech}</h4>
										<small>intermediate</small>
									</div>
							</article>
							)}
					</div>
				</div>
				<div className="skills__stack backend">
					<h3 className={isDarkMode ? "head-stack app__flex" : "head-stack app__flex light-text light-bg"}>Back end </h3>	
					<div className="skills__content">
						{backEnd.map((tech)=>
							<article className="skills__details" key={tech}>
								<BsPatchCheckFill/>
									<div>
										<h4>{tech}</h4>
										<small>intermediate</small>
									</div>
							</article>
							)}
					</div>
				</div>
				<div className="skills__stack design">
					<h3 className={isDarkMode ? "head-stack app__flex" : "head-stack app__flex light-text light-bg"}>Graphic Design</h3>	
					<div className="skills__content">
						{design.map((tech)=>
							<article className="skills__details" key={tech}>
								<BsPatchCheckFill/>
									<div>
										<h4>{tech}</h4>
										<small>intermediate</small>
									</div>
							</article>
							)}
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Skills;