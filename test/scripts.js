(function () {
	var mainApp = angular.module('mainApp', ['bannerApp']);

	mainApp.controller('mainCtrl', ['$scope', function ($scope) {
		var mCtrl = this;
		mCtrl.bannerSettings = {
			animate: 'fadeIn',
			delayTime: 4000,
			slidesToShow: 1,
			button: true,
			type: 'collage'
		}
		mCtrl.bannerContents = [
			{
				imgUrl: 'http://coimbatoretrainingcenter.com/templates/banner/a3.jpg'
        }, {
				imgUrl: 'http://coimbatoretrainingcenter.com/templates/banner/a2.jpg'
        }, {
				imgUrl: 'http://coimbatoretrainingcenter.com/templates/banner/a1.jpg'
        }, {
				imgUrl: 'http://coimbatoretrainingcenter.com/templates/banner/ab1.jpg'
        }
    ];
}]);
	mainApp.directive('windowResize', function () {
		return {
			restrict: 'E',
			link: function (scope, element, attrs) {

			}
		};
	});
})();
