var toggleButton = document.querySelector('#toggle-button');
var mobileMenu = document.querySelector('#mobile-menu');
var menuIsOpen = true

function toggleMenu() {
	menuIsOpen = !menuIsOpen

	if (menuIsOpen) {
		mobileMenu.className = 'mobile-menu';
	}	else {
		mobileMenu.className = 'mobile-menu open';
	}
}

toggleButton.addEventListener('click', toggleMenu);
