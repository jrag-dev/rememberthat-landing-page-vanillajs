import { menuMobile } from './menu.js';

document.addEventListener('DOMContentLoaded', (e) => {
	console.log('DOMContentLoaded');
	menuMobile('.mobile-menu', '.mobile-menu-exit', '.nav');
})