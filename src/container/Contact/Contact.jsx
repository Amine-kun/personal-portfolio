import React, {useState} from 'react'
import './Contact.scss';

import {AiOutlineWhatsApp} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi';
import {BsArrowRightShort} from 'react-icons/bs';
import { client } from '../../client';
import {motion} from 'framer-motion';

const Contact = ({isDarkMode}) => {
 	
 	  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
 	  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	  const [loading, setLoading] = useState(false);
	  const [warning, setWarning] = useState(false);
	  const [isHovered, setIsHovered] = useState('null');



	  const handleChangeInput = (e) => {
		    const { name, value } = e.target;
		    setFormData({ ...formData, [name]: value });
		  };


	  const handleSubmit = () => {
	  		setLoading(true);

		    if(formData.username === '' || 
		    	formData.email === '' ||
		    	 formData.message ===''){
		    	setWarning(true);
		    	setLoading(false);
		    	setTimeout(()=>{setWarning(false);}, 2000)

		    } else {

		    const contact = {
		      _type: 'contact',
		      name: formData.username,
		      email: formData.email,
		      message: formData.message,
		    };
		  		    
		    client.create(contact)
		      .then(() => {
		        setLoading(false);
		        setIsFormSubmitted(true);
		        setTimeout(()=>{setIsFormSubmitted(false);}, 5000);
		      })
		      .catch((err) => console.log(err));
		  }; 
		}

	return (
		<div id="contact" className="app__flex">
			<motion.div
				whileInView={{y:[100, 0], opacity:[0,1]}}
				transition={{duration:0.5}}
				className="head-title">
				<p className="lg-text">Let's have a Chat ! :D</p>
				<p className="head-text">Contact Me</p>
			</motion.div>
			
			{!isFormSubmitted ? 
				(
					<div className="contact__container-form">
						<motion.div
							whileInView={{x:[-100, 0], opacity:[0,1]}}
							transition={{duration:0.5}}
							className="contact__options">
							<a  href="mailto:Aminehlab@gmail.com"
							   className={` decoration-none contact__option app__flex ${!isDarkMode && 'light-input'}`} 
							   onMouseEnter={()=>setIsHovered('first')} 
							   onMouseLeave={()=>setIsHovered('null')}>

								<HiOutlineMail className="icon"/>
								<h5>Aminehlab@gmail.com</h5>
								<p className="subtext">Text me 
									<BsArrowRightShort className={`arrow ${isHovered === 'first' && 'arrow-left'}`}/>
								</p>

							</a>
							<a href="https://api.whatsapp.com/send?phone=0689542406&text=Hello%20:D%20!" 
							   target="_blank"
							   rel="noreferrer"
							   className={` decoration-none contact__option app__flex ${!isDarkMode && 'light-input'}`} 
							   onMouseEnter={()=>setIsHovered('second')} 
							   onMouseLeave={()=>setIsHovered('null')}>

								<AiOutlineWhatsApp className="icon"/>
								<h5>+212689542406</h5>
								<p className="subtext">Text me 
									<BsArrowRightShort className={`arrow ${isHovered === 'second' && 'arrow-left'}`}/>
								</p>

							</a>
						</motion.div>
						<motion.div
							whileInView={{x:[-100, 0], opacity:[0,1]}}
							transition={{duration:1}}
							className="contact__form">

								{warning && <p>Please fill up all the fields!</p>}

								<input type="text" name="name" placeholder="Your Name" className={`inputs ${!isDarkMode && 'light-input'}`} onChange={handleChangeInput}/>
								<input type="text" name="email" placeholder="Your Email" className={`inputs ${!isDarkMode && 'light-input'}`} onChange={handleChangeInput}/>
								<textarea className={`inputs textarea ${!isDarkMode && 'light-input'}`} name="message" placeholder="Your Message" onChange={handleChangeInput}/>
							
								<button className="btn" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
						</motion.div>
					</div>
				) : (
					<motion.div
							whileInView={{x:[-100, 0], opacity:[0,1]}}
							transition={{duration:1}}
							className="done-div">
					          <h3 className="head-text">
					            Thank you for getting in touch!
					          </h3>
			        </motion.div>
				)
			}

		</div>
	)
}

export default Contact;