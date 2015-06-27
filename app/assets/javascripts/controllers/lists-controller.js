#= require services/list
#= require directives/lists/row

app = angular.module('listsController', ['listService', 'listRow']);
app.controller('ListsController', [
  '$scope', 'List', function($scope, List) {
    $scope.lists = List.all({});
    return $scope.removeList = function(list) {
      return list.$destroy({}, function() {
        var b;
        return $scope.lists = (function() {
          var _i, _len, _ref, _results;
          _ref = $scope.lists;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            b = _ref[_i];
            if (b.id !== list.id) {
              _results.push(b);
            }
          }
          return _results;
        })();
      });
    };
  }
]);

app.controller('ListController', [
  '$scope', '$routeParams', '$location', 'List', function($scope, $routeParams, $location, List) {
    $scope.list = List.get({
      id: $routeParams.id
    }, function(list) {
      $scope.listHumanPrice = list.price / 1000;
      return $scope.$watch('listHumanPrice', function() {
        return $scope.list.price = $scope.listHumanPrice * 1000;
      });
    });
    return $scope.submitList = function() {
      var callback;
      callback = function() {
        return $location.path("/list");
      };
      if ($scope.list.id != null) {
        return $scope.list.$update({}, callback);
      } else {
        return List.create($scope.list, callback);
      }
    };
  }
]);