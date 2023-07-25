import React,{useState, useEffect} from 'react';
import './Article.scss';
import {useNavigate} from 'react-router-dom';
import {urlFor} from '../../client';

const Article = ({details}) => {
	
	const navigate = useNavigate();

	return (
		<>
			<div className="details__header app__flex">
					<p>{details[0].date}</p>
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
							{details[0].studyCaseImg && <img src={urlFor(details[0].studyCaseImg)} alt="details__img-sub" className="details__img-sub"/>}
							<h5>
								{details[0].moreDetails} 
							</h5>
						</span>

				</div>
				<div className="app__flex">
					
							 {details[0].codeLink &&
							 		<a href={details[0].codeLink}  target="_blank"><button className="btn">Full project on Github</button></a>
							 		}  

							 {details[0].projectLink && 
								<a href={details[0].projectLink}  target="_blank"><button className="btn-2">Live Demo</button></a>
									}

					 		<button className="btn-2" onClick={()=>navigate('/')}>Back</button>
					
				</div>	
		</>
	)
}

export default Article;