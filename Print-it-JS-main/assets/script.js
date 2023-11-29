const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]; 

// VARIABLES //

let i = 0;
const flecheG = document.querySelector ("#banner .arrow_left");
const flecheD = document.querySelector ("#banner .arrow_right");
const textSlide = document.querySelector ("#banner p");
const imgSlide = document.querySelector (".banner-img");
const dots = document.querySelector ("#banner .dots"); 


// CREATION DOT //

for (let a = 0; a < slides.length; a++) {
	const dot = document.createElement ("div");
	dot.classList.add("dot");

	dots.appendChild(dot);
}

const dotsElement = dots.querySelectorAll(".dot");

dotsElement[0].classList.add("dot_selected");


// ADD EVENT CLICK // 

flecheG.addEventListener("click", function () {
	dotsElement[i].classList.remove("dot_selected");
	i--;
	if (i === -1) {
		i = slides.length -1;
	}
	imgSlide.src = "./assets/images/slideshow/" + slides[i].image;
	textSlide.innerHTML = slides[i].tagLine;
	dotsElement[i].classList.add("dot_selected");

	
});

flecheD.addEventListener("click", function () {
	dotsElement[i].classList.remove("dot_selected");
	i++;
	if (i === slides.length){
		i = 0;
		
	}
	imgSlide.src = "./assets/images/slideshow/" + slides[i].image;
	textSlide.innerHTML = slides[i].tagLine;
	dotsElement[i].classList.add("dot_selected");
	
} )

// FUNCTION //
