var app;
app = angular.module('bookService', ['ngResource']);

app.factory('Book', ['$resource', function($resource) {
    return $resource('/api/books/:id.json', {
      id: '@id'
    }, {
      all: {
        isArray: true
      },
      update: {
        method: 'PUT',
        transformRequest: function(object) {
          return angular.toJson({
            book: object
          });
        }
      },
      destroy: {
        method: 'DELETE',
        transformRequest: function(object) {}
      },
      create: {
        method: 'POST',
        transformRequest: function(object) {
          return angular.toJson({
            book: object
          });
        }
      }
    });
  }
]);