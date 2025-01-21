async function loadComponent(url, placeholderId) {
    const response = await fetch(url);
    const text = await response.text();
    document.getElementById(placeholderId).innerHTML = text;
}

async function initialize() {
    await loadComponent('header.html', 'header-placeholder');
    await loadComponent('footer.html', 'footer-placeholder');

    // Add event listeners after loading the header
    document.querySelectorAll('.navbar-list li a').forEach(link => {
        link.addEventListener('click', function (e) {
            // Remove active class from all <li> elements
            document.querySelectorAll('.navbar-list li').forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to the clicked item's parent <li>
            const currentLi = this.parentElement;
            currentLi.classList.add('active');

            // Find parent menu item and add active class
            const parentLi = currentLi.closest('ul').closest('li');
            if (parentLi) {
                parentLi.classList.add('active');
            }
        });
    });

    // Menu toggle functionality
    document.querySelector('.menu-button').addEventListener('click', function() {
        document.querySelector('.navbar').classList.toggle('active');
    });

    // Hide mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navbar = document.querySelector('.navbar');
        const menuButton = document.querySelector('.menu-button');
        if (!navbar.contains(e.target) && !menuButton.contains(e.target)) {
            navbar.classList.remove('active');
        }
    });
}

initialize();