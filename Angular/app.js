
var app = angular.module('myapp', []) ;

app.controller('HeaderCtrl', HeaderCtrl);

function HeaderCtrl($scope) {
        $scope.appDetails = {
		title: "ShastryBooks",
		tagline: "Books for every occasion"
	};
	
}