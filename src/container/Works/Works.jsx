import React, {useState, useEffect} from 'react';
import './Works.scss';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';

import { client } from '../../client';
import { motion } from 'framer-motion';

const tabs = ['All', 'Web App', 'Digital Painting'];

const Works = ({isDarkMode}) => {

		  const [spinner, setSpinner] = useState(true);
		  const [works, setWorks] = useState([]);
		  const [filterWork, setFilterWork] = useState([]);
		  const [activeFilter, setActiveFilter] = useState('All');
		  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

		  	useEffect(() => {
			    const query = '*[_type == "works"]';

			    client.fetch(query).then((data) => {
			      setWorks(data);
			      setFilterWork(data);
			      setSpinner(false);

			    });
			  }, []);

		  	const handleWorkFilter = (item) => {
			    setActiveFilter(item);
			    setAnimateCard([{ y: 100, opacity: 0 }]);

			    setTimeout(() => {
			      setAnimateCard([{ y: 0, opacity: 1 }]);

			      if (item === 'All') {
			        setFilterWork(works);
			      } else {
			        setFilterWork(works.filter((work) => work.tags.includes(item)));
			      }
			    }, 500);
			  };

	return (
		<div id="projects" className="app__flex">
			<div className="head-title">
				<p className="lg-text">Some things i’ve built</p>
				<p className="head-text">My projects</p>
			</div>

			<div className="app__flex portfolio__section">
				<div className="app__work-filter">
			        {tabs.map((item, index) => (
			          <div
			            key={index}
			            onClick={() => handleWorkFilter(item)}
			            className={`app__work-filter-item app__flex p-text ${activeFilter === item && 'item-active'}`}
			          >
			            {item}
			          </div>
			        ))}
			      </div>
			      <motion.div
					whileInView={{y:[100, 0], opacity:[0,1]}}
					transition={{duration:0.5}}>

				      <motion.div
					        animate={animateCard}
					        transition={{ duration: 0.5, delayChildren: 0.5 }}
					        className="app__work-portfolio"
					      >
					      	{spinner && <Spinner height={20}/>}
					        {filterWork && !spinner && filterWork.map((work, index) => (
					          	<Card key={index} work={work} isDarkMode={isDarkMode} index={index} />
					        ))}
					      </motion.div>
				   </motion.div>
			</div>
		</div>
	)
}

export default Works;