import React from 'react';
import './MainHeader.scss';
import logo from '../../assets/logo.png';
import { motion, useScroll } from "framer-motion";
import {useNavigate} from 'react-router-dom';

const MainHeader = ({isDarkMode, setIsDarkMode}) => {

	const navigate=useNavigate();
	const { scrollYProgress } = useScroll();

	return (
		<div className={isDarkMode ? "container"  : "container container__light"}>
		
				<motion.div className="progress__bar" style={{ scaleX: scrollYProgress }} />
					<div id="container" className="app__flex">
						<img src={logo} className="logo" onClick={()=>navigate('/')}></img>
							<span className="switch" onClick={()=>setIsDarkMode(!isDarkMode)}>
								<span className={isDarkMode ? "switcher_dark" : "switcher_dark switcher_light"} >
								</span>
							</span>
					</div>  
		</div>
	)
}

export default MainHeader