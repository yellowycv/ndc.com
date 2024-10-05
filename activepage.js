
    document.addEventListener('DOMContentLoaded', function() {
        const navItems = document.querySelectorAll('.topnav a'); // Select all links in the navigation
        const currentUrl = window.location.pathname.split('/').pop(); // Get the current page name

        navItems.forEach(item => {
            if (item.getAttribute('href') === currentUrl) {
                item.classList.add('active'); // Add active class to the current nav item
            } else {
                item.classList.remove('active'); // Remove active class from other items
            }
        });
    });

    function toggleMenu() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive"; // Add responsive class
        } else {
            x.className = "topnav"; // Remove responsive class
        }
    }
    
    

