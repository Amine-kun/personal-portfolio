import React from 'react';
import './Spinner.scss';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';

const Spinner = ({height}) => {
	return (
		<div id="spinner" className="app__flex" style={{height:`${height}vh`, width:"100vw"}}>
			<AiOutlineLoading3Quarters className="spinner"/>
		</div>
	)
}

export default Spinner;