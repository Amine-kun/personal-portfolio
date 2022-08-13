import React from 'react';
import './Footer.scss';

import {FaInstagramSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa';

const Footer = () => {
	return (
		<div id="footer" className="app__flex">
			<div className="app__flex footer__icons">
				<FaGithubSquare/>
				<FaLinkedin/>
				<FaInstagramSquare/>
			</div>
		</div>
	)
}

export default Footer;