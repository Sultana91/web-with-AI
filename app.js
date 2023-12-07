document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('nav ul');
    const navItems = document.querySelectorAll('nav li');

    mobileMenuToggle.addEventListener('click', function() {
        navList.classList.toggle('hide-menu');
    });

    // Add click event listener to each navigation item
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navList.classList.add('hide-menu');
        });
    });
});
