"use strict";
(function () {

	var
		initialDate = new Date(),
		plugins = {
			copyrightYear:           $( '.copyright-year' ),
			tabsCorporate:           $( '.tabs-corporate' ),
		};

	$(function () {
		var isNoviBuilder = window.xMode;

		if (plugins.copyrightYear.length) {
			plugins.copyrightYear.text(initialDate.getFullYear());
		}

		if (plugins.tabsCorporate.length) {
			var item = $('.tabs-corporate > .nav-tabs .nav-link'),
				galleryItem = plugins.tabsGallery;
			if (!isNoviBuilder) {

				for (var i = 0; i < item.length; i++) {
					$(item[i]).append("<span class='nav-link-hover'>" + $(item[i]).find('.nav-link-main').html() + "</span>");
				}


			} else {
				$(galleryItem).find('.tab-pane:first').addClass('active show');
				$(galleryItem).find('.nav-link:first').addClass('active');
			}

		}

	});
}());
