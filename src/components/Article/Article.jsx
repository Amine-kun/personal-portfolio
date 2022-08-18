import React,{useState, useEffect} from 'react';
import './Article.scss';
import {urlFor} from '../../client';

const Article = ({details}) => {
	console.log(details);

	return (
		<>
			<div className="details__header app__flex">
					<p>Webnesday, August 10, 2022</p>
					<p className="head-text">{details[0].title}</p>
						<div className="tags app__flex">
							
							{details[0].tags.map((tag)=><span className="Atag" key={tag}>{tag}</span>)}

						</div>
				</div>
				<div className="in__details-section app__flex">
					<img src={urlFor(details[0].imgUrl)} alt="details__img" className="details__img"/>
					<h3>{details[0].description}</h3>
					<h5>
						{details[0].details}
					</h5>
						<span className="article app__flex">	
							<img src={urlFor(details[0].studyCaseImg)} alt="details__img-sub" className="details__img-sub"/>
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
					{details[0].projectLink && details[0].codeLink 
						?<>
							<button className="btn">Full project on Github</button>
						     <button className="btn-2">Live Demo</button>
					     </>
					 	:<>
					 		<button className="btn-2">Back</button>
					 	 </>}
					
				</div>	
		</>
	)
}

export default Article;