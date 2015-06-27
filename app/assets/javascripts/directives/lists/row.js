#= require templates/lists/row

var app;

app = angular.module('listRow', ['templates']);

app.directive('listRow', function() {
  return {
    restrict: 'A',
    scope: {
      list: '=',
      removeList: '&removelist'
    },
    templateUrl: 'lists/row.html',
    controller: function($scope) {}
  };
});