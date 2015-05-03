var _AP_sizes = (function($,host){
	return{
		navSizes: function(){
			var nav = $('.h-toolbar .collapse.navbar-collapse');
			var navWidth = nav.width();
			var navAvailWidth = navWidth - $('.h-toolbar .navbar-header').width() - $('#uMenu').width();

			var mMenu = nav.find('#mMenu');
			var mMenuWidth = mMenu.width();

			if (navAvailWidth <= mMenuWidth && $(mMenu.find('li:last').not('#newDropLink')) ) {
				var newDropLink = '<li id="newDropLink" class="dropdown">'+
									'<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Other...<span class="caret"></span></a>'+
									'<ul id="newDropLinkConteiner" class="dropdown-menu" role="menu">'+
									'</ul>'+
								'</li>';
				var lastLink;

				if ( mMenu.children('li:last').is('#newDropLink') ) {
					lastLink = $('#newDropLink').prev('li');
				} else {
					lastLink = mMenu.children('li:last');
					mMenu.append(newDropLink);
				};
				lastLink.remove();
				$('#newDropLinkConteiner').append(lastLink);
				$('#newDropLinkConteiner .dropdown').removeClass('dropdown').addClass('dropdown-submenu');
				_AP_sizes.navSizes();
			};
		}
	};
})(jQuery, document);