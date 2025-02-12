

const navbarToogle = document.querySelector('#navbar-toggle');

navbarToogle.addEventListener("click", () => {
    const navbar = document.querySelector('.navbar');

    navbar.classList.toggle('expand');
})