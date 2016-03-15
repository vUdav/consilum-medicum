$(document).ready(function() {
	// Init functions
	mobileMenu();

	// Mobile menu
	function mobileMenu() {
		$('#menu-show').on('click',function(e){
			e.preventDefault();
			$('.page-header__menu').toggleClass('page-header__menu--active');
		});
	}
});