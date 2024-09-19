import React from 'react';
import './Header.scss';
import {motion} from 'framer-motion';

import {FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi';

const url = "https://res.cloudinary.com/dyogdwhc6/image/upload//fl_attachment:Aminbe_berroukham_cv//v1704481315/Aminbe_berroukham_cv.pdf?_s=public-apps";

const Header = () => {
	return (
		<div id="home" className="app__flex app__dim app__header">
			<motion.div
				whileInView={{x:[-100, 0], opacity:[0,1]}}
				transition={{duration:0.5}}
				className="app__flex-wrap header-text">
					<p className="lg-text">Hello, I'm</p>
					<h1 className="head-text">AMINE BERROUKHAM</h1>
					<p className="lg-text">Fullstack Developer  and  Web Designer</p>
					<a className="btn" href={url} download style={{textDecoration:'none'}}>Person.Download_Resume()</a>
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
									<p>5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.age = 21;</p>
									<p>6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#125;</p>
									<p>7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...</p>
									<p>8 &nbsp;&nbsp; &#125;</p>
								</motion.div>
							</div>
						</div>
			</motion.div>
			<motion.div 
					whileInView={{y:[100, 0], opacity:[0,1]}}
					transition={{duration:0.5}}
					className="header__socials">
				<FiGithub className="app__pointer social__icons" onClick={()=>window.open('https://github.com/Amine-kun')}/>
				<FiInstagram className="app__pointer social__icons" onClick={()=>window.open('https://www.instagram.com/amine_berro/')}/>
			</motion.div>
			<motion.div 
					whileInView={{y:[100, 0], opacity:[0,1]}}
					transition={{duration:0.5}}
					className="header__email">
				<p>amineberroukham@outlook.com</p>
			</motion.div>
		</div>
	)
}

export default Header;