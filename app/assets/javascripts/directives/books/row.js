#= require templates/books/row

// var app;

app = angular.module('bookRow', ['templates']);

app.directive('bookRow', function() {
  return {
    restrict: 'A',
    scope: {
      book: '=',
      removeBook: '&removebook'
    },
    templateUrl: 'books/row.html',
    controller: function($scope) {}
  };
});