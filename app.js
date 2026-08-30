const menu = document.querySelector('#moble-menu');
const menuLinks = document.queySelector('.navbar_menu');
const navlogo = document.querySelector('.navbar__logo')
 // Display Mobile Menu
 const mobileMenu = () => {
    menu.classList.toggle('is-ative');
    menuLinks.classList.toggle('active');
 };

 menu.addEventListener('click', mobileMenu);

 // Show active menu when scrolling 
 const highlightMenu = () => {
   const elem = document.querySelector('.highlight')
   const homeMune = document.querySelector('#home-page')
   const aboutMenu = document.querySelector('#about-page')
   const ServicesMenu = document.querySelector('#services-page')
   let scrollpos = window.scrollY
   console.log(scrollpos);

   // add 'highlight' class to my menu items 
   if(window.innerWidth > 960 && scrollpos <600){
      homeMune.classList.add('highlight')
      aboutMenu.classList.remove('highlight')
      return
   }else if (window.innerWidth >960 && scrollpos < 1400) {
      aboutMenu.classList.add('highlight')
      homeMune.classList.remove('higlight')
      ServicesMenu.classList.remove('highlight')
      return
   }else if (window.innerWidth >960 && scrollpos < 2345) {
      ServicesMenu.classList.add('highlight')
      aboutMenu.classList.remove('highlight')
      return
   }
if((elem && window.innerWidth < 960 && scrollpos < 600) || elem) {
   elem.classList.remove('highlight')
}

 };

 window.addEventListener('scroll', highlightMenu);
 window.addEventListener('click', highlightMenu);

// Close mobile Menu when clicking on a menu item 
const hideMobilMenu = () => {
   const menuBars = document.querySelector(',is-active')
};
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);