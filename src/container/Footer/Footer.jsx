import React from 'react';
import './Footer.scss';

import {FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi';
const Footer = () => {
	return (
		<div id="footer" className="app__flex">
		<span className="bar2"></span>
				<FiGithub className="app__pointer social__icons" onClick={()=>window.open('https://github.com/Amine-kun')}/>
				<FiInstagram className="app__pointer social__icons" onClick={()=>window.open('https://www.instagram.com/amine_berro/')}/>
		</div>
	)
}

export default Footer;