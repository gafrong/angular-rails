var app;
app = angular.module('listService', ['ngResource']);

app.factory('List', ['$resource', function($resource){
    return $resource('/api/lists/:id.json', {
      id: '@id'
    }, {
      all: {
        isArray: true
      },
      update: {
        method: 'PUT',
        transformRequest: function(object) {
          return angular.toJson({
            list: object
          });
        }
      },
      destroy: {
        method: 'DELETE',
        transformRequest: function(object){}
      },
      create: {
        method: 'POST',
        transformRequest: function(object){
          return angular.toJson({
            list: object
          });
        }
      }
    });
  }
]);