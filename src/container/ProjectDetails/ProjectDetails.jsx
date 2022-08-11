import React from 'react';
import './ProjectDetails.scss';
import testimg from './test.jpg';

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
								tech stack, This is wher the study case will be described 
								basicaly it will discuss the project idea, the steps and the 
								tech stack, This is wher the study case will be described 
								basicaly it will discuss the project idea, the steps and the 
								tech stack, This is wher the study case will be described 
								basicaly it will discuss the project idea, the steps and the 
								tech stack, This is wher the study case will be described 
								basicaly it will discuss the project idea, the steps and the 
								tech .
					</h5>
						<span className="article app__flex">	
							<img src={testimg} alt="details__img-sub" className="details__img-sub"/>
							<h5>
								This is wher the study case will be described 
								basicaly it will discuss the project idea, the steps and the 
								tech stack, This is wher the study case will be described 
								basicaly it will discuss the project idea, the steps and the 
								tech stack, This is wher the study case will be described 
								basicaly 
							</h5>
						</span>

				</div>
				<div className="app__flex">
					<button className="btn">Full project on Github</button>
					<button className="btn-2">Live Demo</button>
				</div>
			</div>
			<div className="more__section app__flex">

				<h2>More Projects:</h2>

				<div className="related app__flex">
					<img src={testimg} alt="related-post" className="related-post"/>
					<h3>This is a title</h3>
						<div className="tags app__flex">
							<span className="Atag">tag1</span>
							<span className="Atag">tag1</span>
						</div>
				</div>
				<div className="related app__flex">
					<img src={testimg} alt="related-post" className="related-post"/>
					<h3>This is a title</h3>
						<div className="tags app__flex">
							<span className="Atag">tag1</span>
							<span className="Atag">tag1</span>
						</div>
				</div>
				<div className="related app__flex">
					<img src={testimg} alt="related-post" className="related-post"/>
					<h3>This is a title</h3>
						<div className="tags app__flex">
							<span className="Atag">tag1</span>
							<span className="Atag">tag1</span>
						</div>
				</div>
				<span className="bar">
				</span>
			</div>
		</div>
	)
}

export default ProjectDetails