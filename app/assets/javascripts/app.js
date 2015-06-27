#= require templates/books/index
#= require templates/books/form
#= require controllers/books-controller
#= require templates/books/about
#= require templates/lists/index
#= require templates/lists/form
#= require controllers/lists-controller



var app;
app = angular.module('app', ['ngRoute', 'booksController','listsController', 'templates']);
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
    }).when('/list', {
      templateUrl: 'lists/index.html',
      controller: 'ListsController'
    }).when('/list/:id', {
      templateUrl: 'lists/form.html',
      controller: 'ListController'
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