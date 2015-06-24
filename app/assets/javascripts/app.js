#= require templates/books/index
#= require templates/books/form
#= require controllers/books-controller
#= require templates/books/about


var app;
app = angular.module('app', ['ngRoute', 'booksController', 'templates']);
app.config([
  '$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/', {
      templateUrl: 'books/index.html',
      controller: 'BooksController'
    }).when('/book/:id', {
      templateUrl: 'books/form.html',
      controller: 'BookController'
    }).when('/about', {
      templateUrl: 'books/about.html',
      controller: 'AboutController'
    }).otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
    return $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);

app.controller('AboutController', ['$scope', function($scope){
  $scope.test = "hello world";
}])