/**
 * Angular Custom Banner Carousel
 * (c) 2016 Krishnakumar Rajendran
 * license: MIT 
 * github: https://github.com/krishdev/bannerCarouselAngular
 */

(function () {
	'use strict';
	var bannerApp = angular.module('bannerApp', []);

	bannerApp.directive('slideThrough', ["$interval", function ($interval) {
		return {
			restrict: 'EA',
			template: '<div class=bannerContainer><div class="carousel img-gallery"><div active-images=items img-container ng-class="[{animated:true, imageSliderContainer:true},animate,items == 2 ? \'banner-two-images\' : \'\',items == 3 ? \'banner-three-images\' : \'\']"ng-repeat="bs in banner track by $index"><img ng-src={{bs.imgUrl}}><div class=bannerText><div class="animated fadeInLeft"><h3>Heading goes here</h3><span>Text goes here</span></div><button class="animated btn btn-simple fadeInUp"ng-show=button type=button>Sign Up</button></div></div></div><a class="arrow arrow-left"href=""><img alt=Prev class=arrowImgLeft src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Arrow-Left-icon.png"></a><a class="arrow arrow-right"href=""><img alt=Next class=arrowImgRight src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Arrow-Right-icon.png"></a></div>',
			scope: {
				banner: '=',
				animate: '=',
				delay: '=',
				items: '=',
				button: '='
			},
			link: function (scope, element, attrs) {
				var delaySlideBy = scope.delay;
				var autoSlide;
				if (scope.items == 2) {
					angular.element($(".img-gallery")).addClass("banner-two-items");
				} else if (scope.items === 0)
					scope.items = 1;
				if (!scope.animate)
					scope.animate = "fadeIn";
				if (!scope.delay)
					scope.delay = "3500";

				function startSlide() {
					autoSlide = $interval(function () {
						var imgCont = $(".imageSliderContainer"),
							imgContLength = imgCont.length,
							j = 0;
						if (imgContLength > 1) {
							var thisContainer = '',
								containerNumber = [],
								nextContainer = 0;
							for (j; j < imgContLength; j++) {
								thisContainer = $(imgCont[j]);
								if (thisContainer.hasClass('active')) {
									containerNumber.push(j);
									nextContainer++;
								}
							}
							if (containerNumber.length > 0) {
								var x = 0,
									contLength = containerNumber.length;
								for (x; x < contLength; x++) {
									$(imgCont[containerNumber[0]]).removeClass('active');
									if (containerNumber[x] + 1 != imgContLength)
										$(imgCont[containerNumber[x] + 1]).addClass('active');
									else if (containerNumber[x] + 1 == imgContLength) {
										$('.imageSliderContainer').removeClass('active');
										$(imgCont[0]).addClass('active');
										contLength > 1 ? $(imgCont[1]).addClass('active') : '';
										contLength == 3 ? $(imgCont[2]).addClass('active') : '';
									}
								}
							}
						}
					}, delaySlideBy);
				}
				startSlide();
				element.bind('mouseenter', function () {
					$interval.cancel(autoSlide);
				});
				element.bind('mouseleave', function () {
					startSlide();
				});
				element.bind('click', function (e) {
					var elemClicked = $(e.target),
						imgContainer = $(".imageSliderContainer"),
						imgContainerLength = imgContainer.length,
						i = 0;
					if (elemClicked.hasClass("arrowImgRight")) {
						if (imgContainerLength > 1) {
							var imgCont = $(".imageSliderContainer"),
								imgContLength = imgCont.length,
								j = 0;
							if (imgContLength > 1) {
								var thisContainer = '',
									containerNumber = [],
									nextContainer = 0;
								for (j; j < imgContLength; j++) {
									thisContainer = $(imgCont[j]);
									if (thisContainer.hasClass('active')) {
										containerNumber.push(j);
										nextContainer++;
									}
								}
								if (containerNumber.length > 0) {
									var x = 0,
										contLength = containerNumber.length;
									for (x; x < contLength; x++) {
										$(imgCont[containerNumber[0]]).removeClass('active');
										if (containerNumber[x] + 1 != imgContLength)
											$(imgCont[containerNumber[x] + 1]).addClass('active');
										else if (containerNumber[x] + 1 == imgContLength) {
											$('.imageSliderContainer').removeClass('active');
											$(imgCont[0]).addClass('active');
											contLength > 1 ? $(imgCont[1]).addClass('active') : '';
											contLength == 3 ? $(imgCont[2]).addClass('active') : '';
										}
									}
								}
							}
						}
					} else if (elemClicked.hasClass("arrowImgLeft")) {
						if (imgContainerLength > 1) {
							var imgCont = $(".imageSliderContainer"),
								imgContLength = imgCont.length,
								j = 0;
							if (imgContLength > 1) {
								var thisContainer = '',
									containerNumber = [],
									nextContainer = 0;
								for (j; j < imgContLength; j++) {
									thisContainer = $(imgCont[j]);
									if (thisContainer.hasClass('active')) {
										containerNumber.push(j);
										nextContainer++;
									}
								}
								if (containerNumber.length > 0) {
									var x = 0,
										contLength = containerNumber.length;
									for (x; x < contLength; x++) {
										//$(imgCont[containerNumber[contLength - 1]]).removeClass('active');
										if (containerNumber[0] === 0) {
											$(imgCont[containerNumber[contLength - 1]]).removeClass('active');
											$(imgCont[imgContLength - 1]).addClass('active');
										} else {
											$(imgCont[containerNumber[contLength - 1]]).removeClass('active');
											$(imgCont[containerNumber[0] - 1]).addClass('active');
										}

									}
								}
							}
						}
					}
				});
			}
		};
    }]);

	bannerApp.directive('imgContainer', function () {
		var containerElements = [];
		return {
			restrict: 'A',
			scope: {
				activeImages: '='
			},
			link: function (scope, element, attrs) {
				var activeImages = scope.activeImages;
				containerElements.push(element);
				containerElements[0].addClass("active");
				var twoItems = angular.element($(".img-gallery")).hasClass("banner-two-items");
				if (activeImages == 2 && containerElements[1]) {
					containerElements[1].addClass("active");
				}
				if (activeImages == 3 && containerElements[2]) {
					containerElements[1].addClass("active");
					containerElements[2].addClass("active");
				}
			}
		};
	});
})();
