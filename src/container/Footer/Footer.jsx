import React from 'react';
import './Footer.scss';

import {FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi';
const Footer = () => {
	return (
		<div id="footer" className="app__flex">
			<FiGithub className="app__pointer bt"/>
			<FiLinkedin className="app__pointer bt"/>
			<FiInstagram className="app__pointer bt"/>
		</div>
	)
}

export default Footer;