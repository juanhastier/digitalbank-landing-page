const hamburgerBtn = document.querySelector('.hamburger-btn'),
      hamburgerIcon = document.getElementById('hamburger-icon'),
      overlay = document.getElementById('overlay'),
      navMenuLinks = document.querySelectorAll('.nav-menu__link'),
      body = document.body;

function closeMenu() {
  body.classList.remove('open')
  hamburgerIcon.setAttribute('src', './images/icon-hamburger.svg')
  hamburgerBtn.setAttribute('aria-expanded', 'false');
}

hamburgerBtn.addEventListener('click', () => {
  body.classList.toggle('open')

  const isOpen = body.classList.contains('open')

  const iconSrc = isOpen ? './images/icon-close.svg' : './images/icon-hamburger.svg';
  hamburgerIcon.setAttribute('src', iconSrc);
  hamburgerBtn.setAttribute('aria-expanded', !isOpen);
})

navMenuLinks.forEach(link => {
  link.addEventListener('click', closeMenu)
})

overlay.addEventListener('click', closeMenu)

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && body.classList.contains('open')) {
    closeMenu()
  }
})