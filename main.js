/* ABRIR E FECHAR MENU  */
var menuBtn = document.querySelector('.burger-menu');
var closedMenuBtn = document.querySelector('.closed-menu-icon');


function hideMenu () {
  var openedMenu = document.querySelector('#sidebar')
  openedMenu.classList.toggle('active')

  var closedMenu = document.querySelector('#closed-bar')
  closedMenu.classList.toggle('active')

}
menuBtn.addEventListener('click', hideMenu)
closedMenuBtn.addEventListener('click', hideMenu)

/* pesquisar */
var searchBtn = document.querySelector('.search-btn')
var searchInput = document.querySelector('.search-input')
searchBtn.addEventListener('click', () => {
  searchInput.value = ''
})