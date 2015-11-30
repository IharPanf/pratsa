//for AngularJS
showApp.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'template/main.html',
            controller: 'ShowAll'
          }).
          when('/include/:technologyName', {
            templateUrl: 'template/detail.html',
            controller: 'ShowDetail'
          }).
          otherwise({
            redirectTo: '/'
          });
      });

    showApp.controller('ShowAll', function ($scope, $http){
		$http.get('dataFile.json').success(function(data) {
          $scope.arrElem = data;
        });
		$http.get('dataCategory.json').success(function(data) {
          $scope.arrCategory = data;
        });
	});
	
	showApp.controller('ShowDetail', function ($scope, $routeParams, $http){
        $scope.name = $routeParams.technologyName;

        $http.get('dataFile.json').success(function(data) {
          $scope.technology = data.filter(function(dataFilter){
            return dataFilter.name === $scope.name;
         })[0];
		});
    });
//////////////////////////////////////////////////
$('#btnContact').on('click',function(){
	 $('#modal').modal();
	 $('.modal-backdrop').on('click',function(){
		$('.close').click();
	 })
});
$(window).scroll(function() {
	if ($(this).scrollTop() > 0) {
		$('#up').fadeIn();	
	} else {
		$('#up').fadeOut();
	}			
});
$('#up').on('click',function(){
	$("body,html").animate({
					"scrollTop" : 0
					},"slow",function(){
									$('#up').fadeOut();	
								 });
})
