import React, { useEffect, useState } from 'react';
import '../styles/shopping.css'


function Shopping(){
	let [products, updateProducts] = useState([]);
	let [searchBarState, changeState] = useState('closed');

	function toggleSearchBar(e){
		let searchBar = document.getElementById('search-bar');
		let inputBar = searchBar.children[0];

		if (searchBarState == 'closed'){
			searchBar.style.width = '40%';
			inputBar.style.padding = '10px';
			changeState('open');
		} else {
			searchBar.style.width = '0%';
			inputBar.style.padding = '0px';
			changeState('closed');
		}
	}

	function purchase(){
		fetch('http://localhost:8080/')
		.then(res => {return res.json()})
		.then(data => console.log(data))
		.catch(err => console.log(err))
	}

	function changeDisplayImage(url,e){
		// Getting image container
		let image = e.target.parentElement.parentElement.parentElement.children[0].children[0]
		image.src = url;

		// Getting parent container in which all the containers are present
		let parent = e.target.parentElement.parentElement;

		// Getting the selected attribute of of the parent container
		let prevContainerIndex = parent.getAttribute('data-selected');

		// Getting the position attribute of the clicked container
		let currentContianerIndex = e.target.parentElement.getAttribute('data-position');

		// Getting the previous selected container
		let prevContainer = parent.children[prevContainerIndex];

		// Updating the value of the parent containers data-selected attribute
		parent.setAttribute('data-selected', currentContianerIndex);

		// Removing and adding class to previous and current container.
		prevContainer.classList.remove('AIS-active')
		e.target.parentElement.classList.add('AIS-active');
	}

	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			if (searchBarState == 'open'){
				let searchBar = document.getElementById('search-bar');
				let inputBar = searchBar.children[0];
				searchBar.style.width = '0%';
				inputBar.style.padding = '0px';
				changeState('closed');
			}
		})

		if (products.length == 0){
			console.log('Data not found in state, making request to server');
			fetch('http://localhost:8080/getAllProducts', {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			})
			.then(res => res.json())
			.then(res => updateProducts(res))
			.catch(err => console.log(err));
			}
	})

	return(
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

			<section id='shopping-wrapper-component-outer'>
				<section id='shopping-wrapper-component-inner'>

					<div id='shopping-navbar'>
						<div id='search-bar'>
							<input></input>
						</div>
						<div id='search-icon' onClick={toggleSearchBar}>
							<i class="fa-solid fa-magnifying-glass"></i>
						</div>
					</div>
					{products.map(product => {
						return(
							<div className='cards'>
								<div className='card'>
									<div className='image-section'>
										<div className='product-image-container'>
											<div className='main-image-section'>
												<img src={product.images[0]}></img>
											</div>
											<div className='alternative-image-section' data-selected='0'>
												<div className='AIS AIS-active' onClick={e => changeDisplayImage(product.images[0], e)} data-position='0'>
													<img src={product.images[0]}></img>
												</div>
												{
													product.images.map((image, index) => {
														return(
															image !== product.images[0]
															? 
															<div className='AIS' onClick={e => changeDisplayImage(image, e)} data-position={index}>
																<img src={image}></img>
															</div>
															: ""
														)
													})
												}
											</div>
										</div>
									</div>
									
									<div className='description-section'>
										<div className='product-detail-section'>
											<div className='product-name'>
												<h1>{product.name}</h1>
											</div>
											<div className='product-price'>
												<h3>R$ <span>{product.price}/-</span></h3>
											</div>
											<div className='product-features'>
												<h2>FEATURES</h2>
												<ul>
													{
														product.desc.map(list => {
															return(
																<li>{list}</li>
															)
														})
													}
												</ul>
											</div>
											<div className='product-add-to-cart'>
												<button className='add-to-cart-button' onClick={purchase}>
													<p>Add To Cart</p>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</section>
			</section>
		</>
	)
}

export default Shopping;