document.addEventListener('DOMContentLoaded', function () {
    const loginBox = document.querySelector('.login-box');

    function checkScroll() {
        const windowHeight = window.innerHeight;
        const rect = loginBox.getBoundingClientRect();
        const isInView = rect.top < windowHeight && rect.bottom > 0;

        if (isInView) {
            loginBox.classList.add('in-view'); 
        } else {
            loginBox.classList.remove('in-view');
        }
    }

    // Initial check
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});
