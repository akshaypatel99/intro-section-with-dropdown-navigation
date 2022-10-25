const menuBtn = document.getElementById('menuBtn');
const subMenuLinks = document.querySelectorAll('.sub-menu');

menuBtn.addEventListener('click', () => {
	const menuIcon = document.getElementById('toggle-menu');
	const overlay = document.getElementById('overlay');
	const menu = document.getElementById('menu');
	const header = document.body.children[0];

	const source = menuIcon.src.slice(-13, menuIcon.src.length);
	if (source === 'icon-menu.svg') {
		menuIcon.src = './images/icon-close-menu.svg';
		overlay.style.visibility = 'visible';
		overlay.style.right = 0;
		menu.style.visibility = 'visible';
		menu.style.right = 0;
		header.style.overflow = 'visible';
	} else {
		menuIcon.src = './images/icon-menu.svg';
		overlay.style.visibility = 'hidden';
		overlay.style.right = '-100%';
		menu.style.visibility = 'hidden';
		menu.style.right = '-100%';
		header.style.overflow = 'hidden';
	}
});

subMenuLinks.forEach((link) => {
	link.addEventListener('click', () => {
		const arrow = link.children[0];
		const arrowSource = arrow.src.slice(-8, arrow.length);
		arrow.src =
			arrowSource === 'down.svg'
				? './images/icon-arrow-up.svg'
				: './images/icon-arrow-down.svg';
		link.children[1].classList.toggle('open-sub-menu');
	});
});
