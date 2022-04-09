export function smoothScroller(target){
	console.log('Scroller Started');
	let height = document.getElementById(target).offsetTop;
	window.scrollTo({
		top: height,
		left: 0,
		behavior: 'smooth'
	})
}


export function fadeScroller(){
	let banner = document.getElementById('banner');
	let targetContainer = document.getElementById('about-us').offsetTop;
	let scrolled = this.scrollY;

	// // Calculating how much percentage we have scrolled down according to target
	// let reqHeight = 100 - Math.ceil((scrolled / targetContainer) * 100);

	// // Applying the calculated height to banner container
	// banner.style.height = `${reqHeight}vh`;
	
}
