const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const interest = document.querySelectorAll('.skills__rating-interest'),
    lines = document.querySelectorAll('.skills__rating-line span');

interest.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});