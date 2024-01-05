import React from 'react';
import './Header.scss';
import {motion} from 'framer-motion';

import {FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi';

const url = "https://api.cloudinary.com/v1_1/dyogdwhc6/image/download?api_key=759733538962429&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiYjY2Y2ZkODk0OGZkMDIyMzU2N2NkNDA5YzZkMTU2ZDAiLCJ1c2VyX2V4dGVybmFsX2lkIjoiOWUyYTZmZGU4ZDNhYjY3ZTdkNzYwZjhlNjg3ZjNhIiwidXNlcl9jdXN0b21faWQiOiJhbWluZWhsYWJAZ21haWwuY29tIiwiY29tcG9uZW50IjoiY29uc29sZSJ9&public_id=cv-web-pdf_lj1w5c&signature=7c41fb6b42e3734deefde5524d13e5473d4b6116&source=ml&target_filename=cv-web-pdf_lj1w5c&timestamp=1704481463&type=upload"

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
									<p>5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.age = 20;</p>
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
				<p>contact@amineberroukham.me</p>
			</motion.div>
		</div>
	)
}

export default Header;