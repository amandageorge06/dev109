const images = [
  { src: "./images/seal1.jpeg", description: "Silly Seal #1" },
  { src: "./images/seal2.jpeg", description: "Silly Seal #2" },
  { src: "./images/seal3.jpeg", description: "Silly Seal #3" },
  { src: "./images/seal4.jpeg", description: "Silly Seal #4" },
  { src: "./images/seal5.jpeg", description: "Silly Seal #5" },
];

let currentIndex = 0;

const slideshowImage = document.getElementById("slideshow-image");
const imageDescription = document.getElementById("image-description");
const previousButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");


function updateSlideshow(index) {
  slideshowImage.src = images[index].src;
  slideshowImage.alt = `Image ${index + 1}`;
  imageDescription.textContent = images[index].description;
}

function showPrevious() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlideshow(currentIndex);
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlideshow(currentIndex);
}


previousButton.addEventListener("click", showPrevious);
nextButton.addEventListener("click", showNext);


let autoPlay = setInterval(showNext, 5000); 


previousButton.addEventListener("click", () => clearInterval(autoPlay));
nextButton.addEventListener("click", () => clearInterval(autoPlay));

