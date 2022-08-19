import React from 'react';
import './Cardn2.scss';
import {urlFor} from '../../client';
import {useNavigate} from 'react-router-dom';


const Cardn2 = ({card}) => {

	const navigate=useNavigate();

	return (
		<div className="related app__flex" onClick={()=>navigate(`/Project/${card.title}`)}>
						<img src={urlFor(card.imgUrl)} alt="related-post" className="related-post"/>
						<h3>{card.title}</h3>
							<div className="tags app__flex">

								{card.tags.map((tag)=><span className="Atag" key={tag}>{tag}</span>)}

							</div>
		</div>
	)
}

export default Cardn2