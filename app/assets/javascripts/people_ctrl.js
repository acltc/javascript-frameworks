/* global angular */

(function() {
  angular.module('app').controller('peopleCtrl', function($scope, $http) {
    $scope.setup = function() {
      $http.get('/api/v1/people.json').then(function(response) {
        $scope.people = response.data;
      });
    };

    $scope.addPerson = function(name, bio) {
      $scope.errors = [];
      var params = {
        name: name,
        bio: bio
      };
      $http.post('/api/v1/people.json', params).then(function(response) {
        $scope.people.push(response.data);
        $scope.newPersonName = '';
        $scope.newPersonBio = '';
      }, function(error) {
        $scope.errors = error.data.errors;
      });
    };

    $scope.deletePerson = function(person) {
      $http.delete('/api/v1/people/' + person.id + '.json').then(function(response) {
        $scope.people = $scope.people.filter(function(p) {
          return p.id !== person.id;
        });
      });
    };

    $scope.toggleBio = function(person) {
      person.bioStrikeThrough = !person.bioStrikeThrough;
    };

    $scope.toggleOrder = function(attribute) {
      if (attribute !== $scope.orderAttribute) {
        $scope.orderDescending = false;
      } else {
        $scope.orderDescending = !$scope.orderDescending;
      }
      $scope.orderAttribute = attribute;
    };

    window.scope = $scope;
  });
})();
