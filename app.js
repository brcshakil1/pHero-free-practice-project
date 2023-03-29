const menuBtn = document.getElementById('menu-btn');
const sideNav = document.getElementById('side-nav')

sideNav.style.right = '-250px'
console.log(sideNav)

menuBtn.addEventListener('click', toggle);

function toggle() {
return sideNav.style.right === '-250px' 
? sideNav.style.right = '0'
: sideNav.style.right = '-250px'

}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});