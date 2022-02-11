import React from 'react';
import '../styles/shopping.css'


function Shopping(){
	return(
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

			<section id='shopping-wrapper-component-outer'>
				<section id='shopping-wrapper-component-inner'>

					<div className='cards'>
						<div className='card'>
							<div className='image-section'>
								<div className='product-image-container'>
									<div className='main-image-section'>
										<img src="/images/Product images/mouse 1.png"></img>
									</div>
									<div className='alternative-image-section'>
										<div className='AIS AIS-active'>
											<img src="/images/Product images/mouse 1.png"></img>
										</div>
										<div className='AIS'>
											<img src="/images/Product images/mouse 2.png"></img>
										</div>
										<div className='AIS'>
											<img src="/images/Product images/mouse 3.png"></img>
										</div>
										<div className='AIS'>
											<img src="/images/Product images/mouse 4.png"></img>
										</div>
									</div>
								</div>
							</div>
							<div className='description-section'>
								<div className='product-detail-section'>
									<div className='product-name'>
										<h1>Rapoo VT200</h1>
									</div>
									<div className='product-price'>
										<h3>R$ <span>1799/-</span></h3>
									</div>
									<div className='product-features'>
										<h2>FEATURES</h2>
										<ul>
											<li> 1) Tracking: Optical</li>
											<li> 2) Maximum DPI: 6200 DPI</li>
											<li> 3) Tracking: Optical</li>
											<li> 4) Polling Rate: 1000 Hz</li>
											<li> 5) Acceleration: 30G</li>
											<li> 6) Number of Buttons: Eight</li>
											<li> 7) Scroll Wheel Type: Regular</li>
											<li> 8) Lighting: RGB</li>
											<li> 9) Connectivity: USB</li>
											<li> 10) Cable Type: Regular</li>
										</ul>
									</div>
									<div className='product-add-to-cart'>
										<button className='add-to-cart-button'>
											<p>Add To Cart</p>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='cards'>
						<div className='card'>
							<div className='image-section'>
								<div className='product-image-container'>
									<div className='main-image-section'>
										<img src="/images/Product images/Processor/processor 1.png"></img>
									</div>
									<div className='alternative-image-section'>
										<div className='AIS AIS-active'>
											<img src="/images/Product images/Processor/processor 1.png"></img>
										</div>
										<div className='AIS'>
											<img src="/images/Product images/Processor/processor 2.png"></img>
										</div>
										<div className='AIS'>
											<img src="/images/Product images/Processor/processor 3.png"></img>
										</div>
									</div>
								</div>
							</div>
							<div className='description-section'>
								<div className='product-detail-section'>
									<div className='product-name'>
										<h1>Intel Core I7-8700K</h1>
									</div>
									<div className='product-price'>
										<h3>R$ <span>36000/-</span></h3>
									</div>
									<div className='product-features'>
										<h2>FEATURES</h2>
										<ul>
											<li> 1) Tracking: Optical</li>
											<li> 2) Maximum DPI: 6200 DPI</li>
											<li> 3) Tracking: Optical</li>
											<li> 4) Polling Rate: 1000 Hz</li>
											<li> 5) Acceleration: 30G</li>
											<li> 6) Number of Buttons: Eight</li>
											<li> 7) Scroll Wheel Type: Regular</li>
											<li> 8) Lighting: RGB</li>
											<li> 9) Connectivity: USB</li>
											<li> 10) Cable Type: Regular</li>
										</ul>
									</div>
									<div className='product-add-to-cart'>
										<button className='add-to-cart-button'>
											<p>Add To Cart</p>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

				</section>
			</section>
		</>
	)
}

export default Shopping;