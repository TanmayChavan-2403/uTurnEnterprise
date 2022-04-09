import React, {useRef} from 'react';
import '../styles/aboutus.css'


function AboutUS(props){

	let textElement = useRef();

	function updateText(){
		textElement.current.innerText += window.innerWidth + ' px ';
	}

	return(
		<>
			<section id='about-us' onLoad={updateText}>
				<div id='about-us-heading'> <h2>About US</h2></div>
				<div id='about-us-content'>
					<div id='about-us-para'>
						<p ref={textElement}>
							Your Search Ends Here! Your wish is our command. We at uTechies bring together zeal, enthusiasm & energy of 
							our young professionals to make things easily for our clients We are multiple service provider catering to C
							omputer hardware & software. We provide complete Computer hardware and software solutions. We also undertake 
							Web development and Web Hosting. Our Foot print covers Mumbai and Thane regions, with our main focus in 
							Mira-Bhayandar and Vasai-Virar regions. We believe in sole motto that is “Our Prosperity lies in the Prosperity 
							and Growth of our Clients”
						</p>
					</div>
					<div className='about-us-card'>
						<div className='avatar'>
							<img src='/images/Anu Uday Kumar.jpeg' className='avatar-img'></img>
						</div>
						<div className='name'>
							<h1> Anu Uday Kumar </h1>
							<p> Laptop Repair </p>
						</div>
					</div>
					<div className='about-us-card'>
						<div className='avatar'>
							<img src='/images/Bhavesh Patil.jpeg' className='avatar-img'></img>
						</div>
						<div className='name'>
							<h1> Bhavesh Patil </h1>
							<p> Laptop & Desktop Repair </p>
						</div>
					</div>
					<div className='about-us-card'>
						<div className='avatar'>
							<img src='/images/Sanjay Rawat.jpeg' className='avatar-img'></img>
						</div>
						<div className='name'>
							<h1> Sanjay Raway</h1>
							<p> Sales,Accounts & Customer Support </p>
						</div>
					</div>
				</div>
			</section>
		< />
	)

}

export default AboutUS;