import React, {useState} from 'react';
import './FloatingHeader.scss';
import { motion, useScroll } from "framer-motion";
import {AiOutlineHome, AiOutlineUser, AiOutlineStar} from 'react-icons/ai';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {VscCode} from 'react-icons/vsc';

const FloatingHeader = () => {

	const [activeBtn, setActiveBtn]=useState("home");

	return (
		<div className="app__flex">
			<motion.div className="bar__icons" 
						whileInView={{x:[-100, 0], opacity:[0,1]}}
						transition={{duration:0.5}}>
				<a href="#" 
					className={activeBtn === "home" ? 'active__btn' : ''} 
					onClick={()=>setActiveBtn("home")}>
						<AiOutlineHome/>
				</a>
				
				<a href="#about" 
					className={activeBtn === "about" ? 'active__btn' : ''} 
					onClick={()=>setActiveBtn("about")}>
						<AiOutlineUser/>
				</a>
				
				<a href="#experience" 
					className={activeBtn === "experience" ? 'active__btn' : ''} 
					onClick={()=>setActiveBtn("experience")}>
						<AiOutlineStar/>
				</a>

				<a href="#projects" 
					className={activeBtn === "projects" ? 'active__btn' : ''} 
					onClick={()=>setActiveBtn("projects")}>
						<VscCode/>
				</a>
				
				<a href="#contact" 
					className={activeBtn === "contact" ? 'active__btn' : ''} 
					onClick={()=>setActiveBtn("contact")}>
						<BiMessageSquareDetail/
				></a>
			</motion.div>
		</div>
	)
}

export default FloatingHeader;