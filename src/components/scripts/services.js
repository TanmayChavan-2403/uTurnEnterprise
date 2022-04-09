import React from 'react';
import '../styles/services.css'

function Services(props){
	return(
		<>
			<section id='services'>
				<div id='left-container'>
					<div id='text-content'>
						<h1>Our Services</h1>
						<p>Get your computer fixed <br/>while you do other <br/>things</p>
					</div>
					<div id='image-content'>
						<img src='/images/services.jpg'></img>
					</div>
				</div>
				<div id='service-heading'>
					<h1>Our Services</h1>
				</div>
				<div id='right-container'>
					<div className='service-card'>
						<div className='service-card-image'>
							<img src='/images/upgrade.png'></img>
						</div>
						<div className='service-card-text'>
							<h2>Laptop/Desktop Upgrade</h2>
						</div>
					</div>

					<div className='service-card'>
						<div className='service-card-image'>
							<img src='/images/software.png'></img>
						</div>
						<div className='service-card-text'>
							<h2>Software Issues</h2>
						</div>
					</div>

					<div className='service-card'>
						<div className='service-card-image'>
							<img src='/images/motherboard2.png'></img>
						</div>
						<div className='service-card-text'>
							<h2>Motherboard Repair</h2>
						</div>
					</div>

					<div className='service-card'>
						<div className='service-card-image'>
							<img src='/images/security.png'></img>
						</div>
						<div className='service-card-text'>
							<h2>Antivirus</h2>
						</div>
					</div>

					<div className='service-card'>
						<div className='service-card-image'>
							<img src='/images/CPU.png'></img>
						</div>
						<div className='service-card-text'>
							<h2>Assembled Desktops</h2>
						</div>
					</div>
					<div className='service-card'>
						<div className='service-card-image'>
							<img src='/images/keyboard.png'></img>
						</div>
						<div className='service-card-text'>
							<h2>Laptop Keypad Replacemnet</h2>
						</div>
					</div>
				</div>
			</section>
		< />
	)
}

export default Services;