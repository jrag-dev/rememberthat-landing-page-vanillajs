const d = document;

export function menuMobile(btnHamburger, btnClose, menuList) {
	const $btnHamburger = d.querySelector(btnHamburger);
	const $btnClose = d.querySelector(btnClose);
	const $menuList = d.querySelector(menuList);
	
	d.addEventListener('click', (e) => {
		if (e.target.matches(btnHamburger)) {
			e.target.classList.add('inactive');
			$menuList.classList.add('active');
		}
		
		if (e.target.matches(btnClose)) {
			$menuList.classList.remove('active');
			$btnHamburger.classList.remove('inactive');
		}
		
		if (e.target.matches(`${menuList} a`)) {
			$menuList.classList.remove('active');
			$btnHamburger.classList.remove('inactive');
		}
	})

	window.addEventListener('resize', (e) => {
		if (e.target.innerWidth >= 768) {
			$btnHamburger.classList.remove('inactive');
			$menuList.classList.remove('active');
		}
	})

}
