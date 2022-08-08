import React from 'react';
import './Header.scss';
import {motion} from 'framer-motion';

import {AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';
import {FaGithubSquare} from 'react-icons/fa';

const Header = () => {
	return (
		<div id="home" className="app__flex app__dim app__header">
			<motion.div
				whileInView={{x:[-100, 0], opacity:[0,1]}}
				transition={{duration:0.5}}
				className="app__flex-wrap header-text">
					<p>Hello, I'm</p>
					<h1 className="head-text">AMINE BERROUKHAM</h1>
					<p>Fullstack Developer  and  Web Designer</p>
					<button className="btn">Download_Resume</button>
			</motion.div>
			<motion.div
					whileInView={{x:[-100, 0], opacity:[0,1]}}
					transition={{duration:0.5, delayChildren: 0.5}}
					className="">
						<div className="shape1">
							{/*<img src="https://freepikpsd.com/file/2020/03/Man-PNG-Pic.png" alt="picture" className="profileImg"/>*/}
							<div className="bluryShape">
								<motion.div
									whileInView={{x:[-100, 0], opacity:[0,1]}}
									transition={{duration:1.5 }}
									className="">
									<p>1 &nbsp;&nbsp;class Person &#123;</p>
									<p>2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;constructor() &#123;</p>
									<p>3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name = "Amine Berroukham";</p>
									<p>4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.skills = ["Developer", "Designer"];</p>
									<p>5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.age = 20;</p>
									<p>6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#125;</p>
									<p>7 &nbsp;&nbsp; &#125;</p>
								</motion.div>
							</div>
						</div>
			</motion.div>
			<motion.div 
					whileInView={{y:[100, 0], opacity:[0,1]}}
					transition={{duration:0.5}}
					className="header__socials">
				<FaGithubSquare className="app__pointer"/>
				<AiFillLinkedin className="app__pointer"/>
				<AiFillInstagram className="app__pointer"/>
			</motion.div>
			<motion.div 
					whileInView={{y:[100, 0], opacity:[0,1]}}
					transition={{duration:0.5}}
					className="header__email">
				<p>Aminehlab@gmail.com</p>
			</motion.div>
		</div>
	)
}

export default Header;