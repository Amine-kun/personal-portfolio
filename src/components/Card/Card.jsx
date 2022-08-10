import React, {useState} from 'react';
import './Card.scss';

import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import {BsArrowRightShort} from 'react-icons/bs';
import { motion } from 'framer-motion';
import {urlFor} from '../../client';
import {useNavigate} from	'react-router-dom';


const Card = ({work, isDarkMode, index}) => {

	const navigate = useNavigate();
	const [isHovered, setIsHovered] = useState(false);

	return (
				<div className="app__work-item app__flex" key={index}>
				            <div
				              className="app__work-img app__flex"
				            >
				              <img src={urlFor(work.imgUrl)} alt={work.name} />

				              <motion.div
				                whileHover={{ opacity: [0, 1] }}
				                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
				                className="app__work-hover app__flex"
				              >
				                <a href={work.projectLink} target="_blank" rel="noreferrer">

				                  <motion.div
				                    whileInView={{ scale: [0, 1] }}
				                    whileHover={{ scale: [1, 0.90] }}
				                    transition={{ duration: 0.25 }}
				                    className="app__flex"
				                  >
				                    <AiFillEye className={!isDarkMode && 'svg-light'}/>
				                  </motion.div>
				                </a>
				                
				                {work.tags[0] === 'Web App' &&

				                	<a href={work.codeLink} target="_blank" rel="noreferrer">
						                  <motion.div
						                    whileInView={{ scale: [0, 1] }}
						                    whileHover={{ scale: [1, 0.90] }}
						                    transition={{ duration: 0.25 }}
						                    className="app__flex"
						                  >
						                    <AiFillGithub className={!isDarkMode && 'svg-light'}/>
						                  </motion.div>
						                </a>

				            	}

				              </motion.div>
				            </div>

				            <div className="app__work-content app__flex">
				              <h4 className="">{work.title}</h4>
				              <p className="" style={{ marginTop: 10 }}>{work.description}</p>

				              <div className={`app__work-tag app__flex ${!isDarkMode && 'app__work-tag-light'}`}>
				                <p className="p-text bold">{work.tags[0]}</p>
				              </div>
				            </div>
				            <div className="app__flex app__work-more" onClick={()=>navigate(`/Project/${work.title}`)}onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
				            	<p>Study case</p><BsArrowRightShort className={`arrow-icon ${isHovered && 'arrow-icon-left'}`}/>
				            </div>
				          </div>
	)
}

export default Card;