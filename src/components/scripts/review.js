import React, {useEffect} from 'react';
import '../styles/review.css';

function Review(props){

	function updateDimensions(){

		// Checking if the width of screen is greater than 600px if yes then run if block else we will be running else block
		if (window.innerWidth > 600){ 
			// Calculating the dimensions of the review-container element
			let windowWidth = document.getElementById('review-container');
			let gapValue = (20 * window.innerWidth) / 100;
			let screenWidth = window.innerWidth - gapValue;
			let screenHeight = window.innerHeight - 115;

			// Applying the calculated dimensions to the element
			let container = document.getElementById('review-container');
			container.style.width = `${screenWidth}px`;
			container.style.height = `${screenWidth / 2}px`;	

		} else {

			// Calculating the dimensions of the review-container element
			let windowWidth = document.getElementById('review-container');
			let gapValue = (5 * window.innerWidth) / 100;
			let screenWidth = window.innerWidth - gapValue;
			let screenHeight = window.innerHeight - 115;
			console.log(gapValue);

			// Applying the calculated dimensions to the element
			let container = document.getElementById('review-container');
			container.style.width = `${screenWidth}px`;
			container.style.height = `${screenWidth / 2}px`;

		}

		
	}

	useEffect(() => {
		console.log('Component Rendered');
		window.addEventListener('resize', updateDimensions);
	})

	return(
		<>
			<div id='review'>
				<div id='review-container'>
					<div id='review-left-container' onLoad={updateDimensions}>

						<div id='avatar-latter-container'></div>
						<div id='avatar-former-container'>
							<div id='reviewer-avatar'>
								<img src='/images/profilepic.jpg'></img>
							</div>
						</div>

					</div>
					<div id='review-right-container'>
						<div id='reviewer-name'>
							<h2> Tanmay Chavan </h2>
						</div>
						<div id='reviewer-content'>
							<blockquote>
								<span>&#8220;</span> 
									Best service experienced ever. Everyone is polite and the quality they provide
									is at an extreme leve. I bought my first PC from here and its been 5 years, I 
									havent envountered any major issues yet. And whenever something happens, they 
									used to resolve it within a day or two.
									<span>&#8221;</span> 
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		< />
	)
}

export default Review;