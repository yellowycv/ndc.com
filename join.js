document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.querySelector('.form-container');

    function checkScroll() {
        const windowHeight = window.innerHeight;
        const rect = formContainer.getBoundingClientRect();
        const isInView = rect.top < windowHeight && rect.bottom > 0;

        if (isInView) {
            formContainer.classList.add('in-view');
        } else {
            formContainer.classList.remove('in-view');
        }
    }

    // Initial check
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});
