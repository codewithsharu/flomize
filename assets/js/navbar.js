
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        hamburger.innerHTML = navbarMenu.classList.contains('active') ? '×' : '☰';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
            hamburger.innerHTML = '☰';
        });
    });


