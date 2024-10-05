let currentSlide = 0;
const slides = document.querySelector('.animation-pics-container2');
const slideItems = slides.children;
const totalSlides = slideItems.length;

// Clone the first slide and append it to the end for seamless looping
const firstSlideClone = slideItems[0].cloneNode(true);
slides.appendChild(firstSlideClone);

function moveSlide(direction) {
    // Calculate new slide index
    const newSlideIndex = currentSlide + direction;
    
    // Check if the new index is within bounds
    if (newSlideIndex < 0) {
        currentSlide = totalSlides - 1; // Go to the last slide
        slides.style.transition = 'none'; // Disable transition for jump
        slides.style.transform = `translateX(-${totalSlides * 100}%)`; // Jump to the last slide
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease'; // Re-enable transition
            moveSlide(direction); // Move to the correct slide
        }, 50); // Short delay for transition re-enable
        return;
    } else if (newSlideIndex > totalSlides) {
        currentSlide = 0; // Go to the first slide
        slides.style.transition = 'none'; // Disable transition for jump
        slides.style.transform = `translateX(0%)`; // Jump to the first slide
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease'; // Re-enable transition
            moveSlide(direction); // Move to the correct slide
        }, 50); // Short delay for transition re-enable
        return;
    }
    
    currentSlide = newSlideIndex;
    const offset = -currentSlide * 100; // Each slide takes up 100% width
    slides.style.transform = `translateX(${offset}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);


