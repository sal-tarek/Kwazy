const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const nav = document.querySelector('.navbar');
menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  nav.classList.toggle('is-active');
})

let cupcakeCount = 0; // Starting with the first image
const images = document.querySelectorAll('#image-container .image');
const totalImages = images.length;

function changeCupcakeDisplay(direction) {
  // Get the current and next image based on the direction
  const currentImage = images[cupcakeCount];
  cupcakeCount = (direction ? cupcakeCount + 1 : cupcakeCount - 1 + totalImages) % totalImages;
  const nextImage = images[1];

  // Ensure the next image is visible and positioned correctly
  nextImage.style.transition = 'none'; // Remove transition for immediate positioning
  nextImage.style.display = 'block'; // Show the next image
  nextImage.style.left = direction ? '100%' : '-100%'; // Start it off-screen

  // Trigger reflow to apply the initial position
  nextImage.offsetWidth;

  // Slide out the current image and slide in the next image
  currentImage.style.left = direction ? '-100%' : '100%'; // Slide current image out
  nextImage.style.transition = 'left 0.5s ease-in-out';
  nextImage.style.left = '0'; // Slide the next image in

  // When the transition ends, hide the old image
  currentImage.addEventListener('transitionend', () => {
    currentImage.style.display = 'none'; // Hide the old image
  }, { once: true });

  // Add active class to the new image
  nextImage.classList.add('active');
}
  



