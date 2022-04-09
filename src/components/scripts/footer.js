import React from 'react'
import '../styles/footer.css';

export default function Footer(props){
	return(
		<>
			<section id='footer'>
				<div id='company-statement' className='slots'>
					<div id='name'>
						<h1>uTechies</h1>
					</div>
					<div id='phrase'>
						<p>
							Laptop Repair and Service Center in Mira Road Mira Bhayandar
						</p>
					</div>
				</div>
				<div id='company-address' className='slots'>
					<div className='slot-heading'>
						<h2> FIND US AT </h2>
					</div>
					<div className='slot-content'>
						<p>
							Shop No.12, Jupiter Building PK Road, Behind Deepak Hospital Mira Bhayandar Rd, Mira Rd East<br />
							<br/>
							<b>Phone: </b>+91 8097656685 <br/>
							<b>Email: </b> mailbox@u-turn.biz
						</p>
						<div id='social-icons'>
							<i class="fab fa-whatsapp icon"></i>
							<i class="fab fa-facebook icon"></i>
							<i class="fas fa-at icon"></i>
							<i class="fab fa-twitter icon"></i>
							<i class="fab fa-instagram icon"></i>
							<i class="fab fa-google-plus-g icon"></i>

						</div>

					</div>
				</div>
				<div id='google-map' className='slots'>
					<div className='slot-heading'>
						<h2> FIND US ON GOOGLE</h2>
					</div>
					<div className='slot-content'>
						<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60251.391852216904!2d72.863!3d19.294887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa09418f99a51bdde!2suTechies%20Laptop%20Repair%20Centre!5e0!3m2!1sen!2sin!4v1641065214103!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
					</div>
				</div>
			</section>
		< />
	)
}