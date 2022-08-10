import React from 'react';
import './ProjectDetails.scss';
import testimg from './test.jpg'

const ProjectDetails = () => {
	return (
		<div id="details" className="app__flex ">
			<div className="details__section app__flex">
				<div className="details__header app__flex">
					<p>Webnesday, August 10, 2022</p>
					<p className="head-text">Some Title For Article</p>
						<div className="tags app__flex">
							<span className="Atag">tag1</span>
							<span className="Atag">tag1</span>
							<span className="Atag">tag1</span>
							<span className="Atag">tag1</span>
						</div>
				</div>
				<div className="in__details-section app__flex">
					<img src={testimg} alt="details__img" className="details__img"/>
					<h3>This is a sub-title for a project with small decription</h3>
					<h5>This is wher the study case will be described 
					basicaly it will discuss the project idea, the steps and the 
					tech stack, This is wher the study case will be described 
					basicaly it will discuss the project idea, the steps and the 
					tech stack, This is wher the study case will be described 
					basicaly it will discuss the project idea, the steps and the 
					tech stack, This is wher the study case will be described 
					basicaly it will discuss the project idea, the steps and the 
					tech stack, This is wher the study case will be described 
					basicaly it will discuss the project idea, the steps and the 
					tech stack</h5>
				</div>
			</div>
			<div className="more__section">
			more
			</div>
		</div>
	)
}

export default ProjectDetails