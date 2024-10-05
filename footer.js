document.addEventListener('DOMContentLoaded', function () {
    const footerContainer = document.querySelector('.footer-container-cover');

    function checkFooterScroll() {
        const windowHeight = window.innerHeight;
        const rect = footerContainer.getBoundingClientRect();
        const isFooterInView = rect.top < windowHeight && rect.bottom > 0;

        if (isFooterInView) {
            footerContainer.classList.add('footer-in-view');
        } else {
            footerContainer.classList.remove('footer-in-view');
        }
    }

    // Initial check for footer visibility
    checkFooterScroll();

    // Check on scroll
    window.addEventListener('scroll', checkFooterScroll);
});
