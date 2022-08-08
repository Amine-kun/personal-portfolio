import React from 'react'
import './Contact.scss';

import {BsFillTelephoneFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';

const Contact = ({isDarkMode}) => {
	return (
		<div id="contact" className="app__flex">
			<div className="head-title">
				<p>Let's have a Chat ! :D</p>
				<p className="head-text">Contact Me</p>
			</div>
			<div className="contact__container-form">
				<div className="contact__options">
					<div className="contact__option app__flex">
						<HiOutlineMail className="icon"/>
						<p>Aminehlab</p>
					</div>
					<div className="contact__option app__flex">
						<BsFillTelephoneFill className="icon"/>
						<p>+212689542406</p>
					</div>
				</div>
				<div className="contact__form">
					<input type="text" placeholder="Your Name" className={`inputs ${!isDarkMode && 'light-input'}`}/>
					<input type="text" placeholder="Your Email" className={`inputs ${!isDarkMode && 'light-input'}`}/>
					<textarea className={`inputs textarea ${isDarkMode && 'light-input'}`} placeholder="Your Message"></textarea>
					
						<button className="btn">Submit</button>
				</div>
			</div>
		</div>
	)
}

export default Contact;