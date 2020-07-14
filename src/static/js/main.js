let sandwich = document.querySelector('.header__sandwich');
let menu = document.querySelector('.nav__list');
let navItem = document.querySelectorAll('.nav__item');

sandwich.addEventListener('click', () => {
  sandwich.classList.toggle('sandwich--active');
  menu.classList.toggle('nav__list--active');
})

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', () => {
    sandwich.classList.toggle('sandwich--active');
    menu.classList.toggle('nav__list--active');
  })
}
