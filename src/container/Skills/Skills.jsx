import React from 'react';
import './Skills.scss';

import {motion} from 'framer-motion';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {DiJavascript1, DiHtml5, DiMongodb} from 'react-icons/di';

const frontEnd=["ReactJS","HTML5","CSS3","SCSS","Bootstrap","TailwindCSS"];
const backEnd=["NodeJS","PostgreSQL","MongoDB","Firebase"];
const design=["Photoshop","Illustrator","Canva","Figma"];

const Skills = ({isDarkMode}) => {
	return (
		<div id="experience" className="app__flex">
			<motion.div
				whileInView={{y:[100, 0], opacity:[0,1]}}
				transition={{duration:0.5}}
				className="head-title">
				<p>What i can work with</p>
				<h1 className="head-text">My experiences</h1>
			</motion.div>
			<motion.div
				whileInView={{y:[100, 0], opacity:[0,1]}}
				transition={{duration:0.5}}
				className={isDarkMode ? "exp__icons app__flex" : "exp__icons app__flex light-text"}>
						<DiHtml5 className="stack-icons"/>
						<DiJavascript1 className="stack-icons"/>
						<FaReact className="stack-icons"/>
						<FaNodeJs className="stack-icons"/>
						<DiMongodb className="stack-icons"/>
			</motion.div>
			<motion.div
				whileInView={{y:[100, 0], opacity:[0,1]}}
				transition={{duration:1, delayChildren:2}}
				className="stacks">
				
				<div className="stack">
					<p className={isDarkMode ? "head-stack app__flex" : "head-stack app__flex light-text light-bg"}>front end</p>	
						<div className="techs">
							{frontEnd.map((tech)=> <p>- {tech}</p>)}
						</div>
				</div>
				
				<div className="stack">
					<p className={isDarkMode ? "head-stack app__flex" : "head-stack app__flex light-text light-bg"}>back end && Databases</p>
						<div className="techs">
							{backEnd.map((tech)=> <p>- {tech}</p>)}
						</div>
				</div>

				<div className="stack">
					<p className={isDarkMode ? "head-stack app__flex" : "head-stack app__flex light-text light-bg"}>graphic design</p>
						<div className="techs">
							{design.map((tech)=> <p>- {tech}</p>)}
						</div>
				</div>

			</motion.div>
		</div>
	)
}

export default Skills;