
document.querySelector('.header__burger').addEventListener('click',()=>{
	document.querySelector('.header').classList.toggle('menu_active')
})

document.querySelector('.header__search').addEventListener('click',()=>{
	document.querySelector('.header').classList.toggle('search_active')
})