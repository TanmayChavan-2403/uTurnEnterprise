import React, {useEffect} from 'react';
import '../styles/banner.css'
import '../../fonts/elastic stretch.ttf';
import {Link} from 'react-router-dom';

import { smoothScroller, fadeScroller } from '../../packages/smoothScroller.js';

function Banner(){

	function updateMenuBarDimensions(){
		if (window.innerWidth > 600){
			// Fetching the menubar container with the help of its id
			let menubar = document.getElementById('menu-bar');

			// Calculating the width required to the menubar which is 20% of client screen width
			let menubarWidth = (window.innerWidth * 6) / 100;

			// Setting the calculated width to the menubar container 
			menubar.style.width = `${menubarWidth}px`;
		}
	}

	useEffect(() => {
		// onScroll Scubription
		// window.addEventListener('scroll', fadeScroller)
	})

	return(
		<>
			<section id='banner' onLoad={updateMenuBarDimensions} >
				<div id='slideshow-latter'>
					<img src='/images/1.jpg' className='sl' alt='slideshow-image'></img>
					<img src='/images/2.jpg' className='sl' alt='slideshow-image'></img>
					<img src='/images/3.jpg' className='sl' alt='slideshow-image'></img>
					<img src='/images/4.jpg' className='sl' alt='slideshow-image'></img>
					<img src='/images/5.jpg' className='sl' alt='slideshow-image'></img>
				</div>
				<div id='slideshow-former'>
					<div id='sf'>
						<img src='/images/1.jpg' className='sf' alt='slideshow-image'></img>
						<img src='/images/2.jpg' className='sf' alt='slideshow-image'></img>
						<img src='/images/3.jpg' className='sf' alt='slideshow-image'></img>
						<img src='/images/4.jpg' className='sf' alt='slideshow-image'></img>
						<img src='/images/5.jpg' className='sf' alt='slideshow-image'></img>
					</div>
				</div>
				<h1  id='heading'> U-Turn <br />Enterprise </h1>
				<div id='menu-bar'>
					<div id='dummy-bar'>
						<div className='bar'></div>
						<div className='bar'></div>
						<div className='bar'></div>
					</div>
					<section id='menu-items'>
						<div className='menu-icon' onClick={() => smoothScroller('banner')}>
							<img src='/Icons/home.svg' className='ico' alt='menubar-image'></img>
						</div>
						<div className='menu-icon' onClick={() => smoothScroller('about-us')}>
							<img src='/Icons/aboutUS.svg' className='ico' alt='menubar-image'></img>
						</div>
						<div className='menu-icon' onClick={() => smoothScroller('services')}>
							<img src='/Icons/review.svg' className='ico' alt='menubar-image'></img>
						</div>
						<div className='menu-icon' onClick={() => smoothScroller('review')}>
							<img src='/Icons/services.svg' className='ico' alt='menubar-image'></img>
						</div>
						<div className='menu-icon' onClick={() => smoothScroller('contact-us')}>
							<img src='/Icons/contactUS.svg' className='ico' alt='menubar-image'></img>
						</div>
						<div className='menu-icon' onClick={() => smoothScroller('footer')}>
							<img src='/Icons/findUS.svg' className='ico' alt='menubar-image'></img>
						</div>
						<div className='menu-icon'>
							<a href="/shopping">
								<img src='/Icons/shopping.png' className='ico' alt='menubar-image'></img>
							</a>
						</div>
						<div className='menu-icon'>
							<a href="/account">
								<img src='/Icons/avatar2.svg' className='ico' alt='menubar-image'></img>
							</a>
						</div>
					</section> 
				</div>

			</section>
		</>
	)

}

export default Banner;