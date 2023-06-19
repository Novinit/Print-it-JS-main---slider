const slides = [
	{
		image:"slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const leftArrow =document .querySelector ('.arrow_left');
const rightArrow =document .querySelector ('.arrow_right');
numberOffSlides =  slides.length;



// Creation of dots //
function createDots(selected_DOT) {
	dotLine=" ";
	for (let i = 0; i < numberOffSlides; i++) {
		if ( i === selected_DOT) {
			dotLine = dotLine + '<p class="dot  dot_selected"><p>';
		} else {
			dotLine = dotLine + '<p class="dot"><p>';
		};		
	};
	document.querySelector(".dots").innerHTML = dotLine;
}
// end Creation of dots //




// First slide page loading //
numberSlideActuel = 0;
slideActuel = "./assets/images/slideshow/" + slides[numberSlideActuel].image;
document.querySelector(".banner-img").src=slideActuel;
document.querySelector(".tagline").innerHTML = slides[numberSlideActuel].tagLine;
createDots(numberSlideActuel);
// end First slide page loading //





// Arrow control sliders //
	// right
rightArrow.addEventListener ('click', () => {
	if (numberSlideActuel < 3) {
		numberSlideActuel ++;
	}
	else {
		numberSlideActuel = 0;
	};
	document.querySelector(".banner-img").src="./assets/images/slideshow/" + slides[numberSlideActuel].image;
	document.querySelector(".tagline").innerHTML = slides[numberSlideActuel].tagLine;
	createDots(numberSlideActuel);
} );
	//left 
leftArrow.addEventListener ('click', () => {
	if (numberSlideActuel > 0) {
		numberSlideActuel --;
	}
	else {
		numberSlideActuel = 3
	};
	document.querySelector(".banner-img").src="./assets/images/slideshow/" + slides[numberSlideActuel].image;
	document.querySelector(".tagline").innerHTML = slides[numberSlideActuel].tagLine;
	createDots(numberSlideActuel);
} );
// Arrow control sliders //