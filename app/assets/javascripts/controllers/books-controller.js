#= require services/book
#= require directives/books/row

app = angular.module('booksController', ['bookService', 'bookRow']);
app.controller('BooksController', [
  '$scope', 'Book', function($scope, Book) {
    $scope.books = Book.all({});
    return $scope.removeBook = function(book) {
      return book.$destroy({}, function() {
        var b;
        return $scope.books = (function() {
          var _i, _len, _ref, _results;
          _ref = $scope.books;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            b = _ref[_i];
            if (b.id !== book.id) {
              _results.push(b);
            }
          }
          return _results;
        })();
      });
    };
  }
]);

app.controller('BookController', [
  '$scope', '$routeParams', '$location', 'Book', function($scope, $routeParams, $location, Book) {
    $scope.book = Book.get({
      id: $routeParams.id
    }, function(book) {
      $scope.bookHumanPrice = book.price / 1000;
      return $scope.$watch('bookHumanPrice', function() {
        return $scope.book.price = $scope.bookHumanPrice * 1000;
      });
    });
    return $scope.submitBook = function() {
      var callback;
      callback = function() {
        return $location.path("/");
      };
      if ($scope.book.id != null) {
        return $scope.book.$update({}, callback);
      } else {
        return Book.create($scope.book, callback);
      }
    };
  }
]);