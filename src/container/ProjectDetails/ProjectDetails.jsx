import React,{useState, useEffect} from 'react';
import './ProjectDetails.scss';

import Article from '../../components/Article/Article';
import Cardv2 from '../../components/Card__two/Cardn2';
import Spinner from '../../components/Spinner/Spinner';


import {useParams } from 'react-router-dom';
import { client } from '../../client';

const ProjectDetails = () => {

	const { id } = useParams();
	const [details, setDetails] = useState();
	const [more, setMore] = useState();
	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
			    const query = `*[_type == "works"  && title == "${id}" ]`;

			    client.fetch(query)

			    .then((data) => {
			        setDetails(data);
			      	client.fetch(`*[_type == "works"  && tags[0] == "${data[0].tags[0]}" ]`)
			      		.then((data2)=>{
			      			let filtering = data2.filter((post)=> post.title !== id);
			      			setMore(filtering)		      			
			      				});
				    });
			    setSpinner(false);
			  }, []);


	return (
		<>
		{spinner && <Spinner height={100}/>}
		{details && !spinner && <div id="details" className="app__flex ">
			<div className="details__section app__flex">
				<Article details={details}/>
			</div>
			<div className="more__section app__flex">
				<h2>More Projects:</h2>
				<div className="app__flex cards">

					{more && more.map((card, index)=><Cardv2 card={card} key={index}/>)}

				</div>
				<span className="bar">
				</span>
			</div>
		</div>}
		</>
	)
}

export default ProjectDetails