document.querySelectorAll('.navbar-list li a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Remove active class from all <li> elements
        document.querySelectorAll('.navbar-list li').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to the parent <li> of the clicked <a>
        this.parentElement.classList.add('active');
    });
});

document.querySelector('.menu-button').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Toggles the "active" class to show/hide the dropdown
});

