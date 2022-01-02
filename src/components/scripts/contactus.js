import React, {useEffect} from 'react';
import '../styles/contactus.css';


export default function ContactUS(props) {

	// function updateDimensions(){
		
	// 	// Calculating the dimensions of the review-container element
	// 	let windowWidth = document.getElementById('contact-us');
	// 	let screenWidth = window.innerWidth;
	// 	let screenHeight = window.innerHeight - 115;

	// 	// Applying the calculated dimensions to the element
	// 	let container = document.getElementById('contact-us');
	// 	container.style.height = `${screenWidth / 2}px`;
	// }

	// useEffect(() => {
	// 	window.addEventListener = ('resize', updateDimensions)
	// })

	return(
		<>
			<div id='contact-us'> 
				<div id='contact-left-container'>
					<input className='user-input' placeholder='Your Name'/>
					<input className='user-input' placeholder='Your Email'/>
					<input className='user-input' placeholder='Your Subject'/>
					<input className='user-input' placeholder='Your Message'/>
				</div>
				<div id='contact-right-container'>
					<img src='/images/contactus.png'></img>
				</div>
			</div>
		< />
	)	
}