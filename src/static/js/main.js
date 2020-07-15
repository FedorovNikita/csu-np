let sandwich = document.querySelector('.header__sandwich');
let menu = document.querySelector('.nav__list');
let navItems = document.querySelectorAll('.nav__item');
let anchors = document.querySelectorAll('a[href*="#"]')


sandwich.addEventListener('click', () => {
  sandwich.classList.toggle('sandwich--active');
  menu.classList.toggle('nav__list--active');
})

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', () => {
    sandwich.classList.toggle('sandwich--active');
    menu.classList.toggle('nav__list--active');
  })
}

for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', (e) => {
    e.preventDefault();
    let blockId = anchors[i].getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
