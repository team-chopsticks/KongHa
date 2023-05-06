// Get the modal
var modal = document.querySelector(".gallery-modal");

// Get the image row
var imageRow = document.querySelector(".project-gallery ul");

// Get the images
var images = document.querySelectorAll(".project-gallery li");

// Get the modal content
var modalContent = document.querySelector(".gallery-content");

// Get the close button
var closeButton = document.querySelector(".gallery-close");

// Get the arrow buttons
var prevButton = document.querySelector(".gallery-prev");
var nextButton = document.querySelector(".gallery-next");

// Set the current slide to 1
var currentSlide = 1;

const header = $(".header");
const footer = $(".footer");

function openModal(event) {

    // Get the clicked image
    var clickedImage = event.target;
    
    // Get the image source
    var imageSrc = clickedImage.querySelector("img").getAttribute("src");
  
    // Set the current slide to the clicked image index
    currentSlide = Array.from(images).indexOf(clickedImage) + 1;
  
    // Set the current slide image source
    modalContent.querySelector("img").setAttribute("src", imageSrc);
    
    // Show the modal
    modal.style.display = "block";
    
    // Show the 'prev' and 'next' buttons
    prevButton.style.display = "block";
    nextButton.style.display = "block";
    
    // Show the 'close' button
    closeButton.style.display = "block";

    header.css({ filter: "blur(5px) opacity(0.5)", pointerEvents: "none" });
    footer.css({ filter: "blur(5px) opacity(0.5)", pointerEvents: "none" });
  }

// Close the modal
function closeModal() {
  modal.style.display = "none";
    header.css({ filter: "", pointerEvents: "auto" });
  footer.css({ filter: "", pointerEvents: "auto" });
}

// Navigate to the previous slide
function prevSlide() {
  // Decrement the current slide
  currentSlide--;

  // If the current slide is less than 1, set it to the last slide
  if (currentSlide < 1) {
    currentSlide = images.length;
  }

  // Get the image source of the current slide
  var imageSrc = images[currentSlide - 1].querySelector("img").getAttribute("src");

  // Set the modal image source to the current slide
  modalContent.querySelector("img").setAttribute("src", imageSrc);
}

// Navigate to the next slide
function nextSlide() {
  // Increment the current slide
  currentSlide++;

  // If the current slide is greater than the number of slides, set it to the first slide
  if (currentSlide > images.length) {
    currentSlide = 1;
  }

  // Get the image source of the current slide
  var imageSrc = images[currentSlide - 1].querySelector("img").getAttribute("src");

  // Set the modal image source to the current slide
  modalContent.querySelector("img").setAttribute("src", imageSrc);
}

// Add event listeners
images.forEach(function(image) {
  image.addEventListener("click", openModal);
});

closeButton.addEventListener("click", closeModal);

prevButton.addEventListener("click", prevSlide);

nextButton.addEventListener("click", nextSlide);

// Close the modal when clicking outside of it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});






