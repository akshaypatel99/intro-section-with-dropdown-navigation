const menuBtn = document.getElementById('menuBtn');
const primaryNavigation = document.getElementById('primary-navigation');
const overlay = document.getElementById('overlay');
const header = document.getElementById('primary-header');

const subMenuBtns = document.querySelectorAll('.sub-menu-btn');
const subMenus = document.querySelectorAll('.sub-menu');

menuBtn.addEventListener('click', () => {
	const visibility = primaryNavigation.getAttribute('data-visible');

	if (visibility === 'false') {
		primaryNavigation.setAttribute('data-visible', true);
		header.setAttribute('data-visible', true);
		overlay.setAttribute('data-visible', true);
		menuBtn.setAttribute('aria-expanded', true);
	} else {
		primaryNavigation.setAttribute('data-visible', false);
		header.setAttribute('data-visible', false);
		overlay.setAttribute('data-visible', false);
		menuBtn.setAttribute('aria-expanded', false);
	}
});

subMenuBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const id = btn.getAttribute('aria-controls');
		const subMenu = document.getElementById(id);
		const visibility = subMenu.getAttribute('data-visible');

		if (visibility === 'false') {
			subMenu.setAttribute('data-visible', true);
			btn.setAttribute('aria-expanded', true);
		} else {
			subMenu.setAttribute('data-visible', false);
			btn.setAttribute('aria-expanded', false);
		}
	});
});
