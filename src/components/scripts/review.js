import React, {useEffect, useState} from 'react';
import '../styles/review.css';

function Review(props){
	const reviewData = [{name: 'Irfan Khan', id:0 ,data: "Good service in very affordable price and also good communicate with customer."},
						{name: "Prashant Mitra", id:1 , data: "One stop shop for any laptop issues.. good service n excellent ppl." },
						{name: "Rishabh Aggarwal", id:2 , data: "Good place, good people, good ethics." },
						{name: "Ajay Kadwaikar", id:3 , data:"Good service and professional staff. Had taken my old Dell laptop for fabrication and they did a good quick job. They are reliable and I would highly recommend them for all laptop related issues. Keep up the good service "},
						{name: "Tanmay Chavan", id:4 , data:"Best service experienced ever. Everyone is polite and the quality they provide is at an extreme level. I bought my first PC from here and it's been 5 years, I haven't encountered any major issue yet. And whenever something happens, they used to resolve it within a day or two."},
						{name: "Vijay Kadam", id:5 , data:"Good people and good service   they are very genuine guys you can trust them"},
						{name: "Snehil Madhup", id:6 , data:"Inexperienced technicians, don't make any effort to repair your gadget and they will tell you that it is not repairable. Bad service, if u r looking for some product and they don't have it  they will directly tell you that this kind of product doesn't exist in this universe."},
						{name: "Maxan D'souza", id:7 , data:"Very helpful in understanding and resolving the queries. Anu was great and maintained transparency with regards to the issues in the laptop. He explained the issue to me and it's resolution. Great service!"},
						{name: "Lavina D'souza", id:8 , data:"The staff here is very helpful...visited them for my HP laptop battery issue... within 24 hours of my interaction over the call... they ordered a replacement battery... I didn't even have to go there to show them the laptop... thru phone and some laptop battery pictures the issue was resolved"},
						{name: "Vishal", id:9 , data:"Amazing service. Reasonable & Professional.Loved the after service tooo. Keep up the good work."},
						{name: "Ibad Bhure", id:10 , data:"Great Service team with good response for any query, trustworthy and highly reliable. Would always prefer them for software as wells as for products."},
						{name: "Sandhya Pachupate", id:11 , data:"They provide great services and best solutions. And are quick at thier work. The staff is kind and humble. Would highly recommend them for all laptop services as I have used their services multiple times."},
						{name: "Hritik Shetty", id:12 , data:"Greetings...!!Been dealing with U-Turn since a long time now. never been disappointed .They are prompt and thorough professionals. my business entirely depends on my computer , anything goes wrong i have to call Mr.Rawat(U-TURN) he is the saviour!Team U-turn thank-you for the response and service you guys render. pls continue the same support and service that you guys provide.....CHEERS U-TURN !!!!!!"},
						{name: "Raju Thapa", id:13 , data:"Truely  professional service was very happy with the  price and service will definitely recommend  family and friends"},
						{name: "Atik Kadam", id:14 , data:"They rectified my laptop problem within a day. There was some motherboard IC issue they identified it and got it repaired. You can always call them and get solutions for your system. The price is preety reasonable."},
						{name: "Riva Pontes", id:15 , data:"very good service will recommend people to visit u turn enterprises  thankx for the good service"},
					   ]

	// Creating a state for storing the current review ID
	let [reviewId, changeReview] = useState(1)
	let [reviewerName, changeReviewerName] = useState('Tanmay Chavan')
	let [reviewerContent, changeReviewerContent] = useState("Best service experienced ever. Everyone is polite and the quality they provide is at an extreme level. I bought my first PC from here and its been 5 years, I haven't encountered any major issue yet. And whenever something happens, they used to resolve it within a day or two.")

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
		reviewData.forEach((recData, index) => {
			if (recData.id === reviewId){
				changeReviewerName(recData.name);
				changeReviewerContent(recData.data);
			}
		})
		window.addEventListener('resize', updateDimensions);
	}, [reviewId])


	function handleReviewFuntions(action) {
		if (action === 'prev' && (reviewId >= 0 && reviewId < 16)){
			console.log('reducing');
			changeReview(reviewId - 1);
		}
		else if (action === 'next' && (reviewId >= 0 && reviewId < 16)){
			console.log('increasing');
			changeReview(reviewId + 1);
		}
		console.log(reviewId);
	}
	return(
		<>
			<div id='review'>
				<div id='review-container'>
						<div id='left-arrow-container' className='arrowContainer' onClick={() => handleReviewFuntions('prev') } >
							<img id='leftArrow' src='images/leftArrow.png'></img>
						</div>
						
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
								<h2> {reviewerName}</h2>
							</div>
							<div id='reviewer-content'>
								<blockquote>
									<span>&#8220;</span> 
										{reviewerContent}
										<span>&#8221;</span> 
								</blockquote>
							</div>
						</div>

						<div id='left-arrow-container' className='arrowContainer' onClick={() => handleReviewFuntions('next')}>
							<img id='rightArrow' src='images/rightArrow.png'></img>
						</div>

				</div>
			</div>
		< />
	)
}

export default Review;