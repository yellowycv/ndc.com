/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Select all slideshow images
  let slideshowImages = document.querySelectorAll(".slideshow-image");
  let currentImageIndex = 0;

  // Function to show the next image
  function showNextImage() {
      // Remove 'active' class from the current image
      slideshowImages[currentImageIndex].classList.remove("active");
      // Update the index to the next image
      currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
      // Add 'active' class to the next image
      slideshowImages[currentImageIndex].classList.add("active");
  }

  // Change image every 9 seconds
  setInterval(showNextImage, 9000);

  // Function to handle the visibility of the image with animation
function handleScroll() {
    const img = document.getElementById('myImage');
    const imgPosition = img.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5; // Adjust this value if needed

    if (imgPosition < screenPosition) {
        img.classList.add('visible');
    } else {
        img.classList.remove('visible');
    }
}

// Event listeners for scroll and load
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Initial check to handle image visibility on page load
  handleScroll();
  document.addEventListener('DOMContentLoaded', function () {
    // Combine selectors for all elements you want to animate
    const elementsToAnimate = document.querySelectorAll('.p-content, .p-content2,.p-content1, .animation-pics-container');
    const footerContainer = document.querySelector('.footer-main-container'); // Add the footer container

    function checkScroll() {
        const windowHeight = window.innerHeight;

        elementsToAnimate.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isInView = rect.top < windowHeight && rect.bottom > 0;

            if (isInView) {
                element.classList.add('in-view');
            } else {
                element.classList.remove('in-view');
            }
        });

        // Footer animation logic
        const footerRect = footerContainer.getBoundingClientRect();
        const isFooterInView = footerRect.top < windowHeight && footerRect.bottom > 0;

        if (isFooterInView) {
            footerContainer.classList.add('in-view');
        } else {
            footerContainer.classList.remove('in-view');
        }
    }

    // Initial check
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});
