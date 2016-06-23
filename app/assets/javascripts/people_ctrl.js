/* global angular */

(function() {
  angular.module('app').controller('peopleCtrl', function($scope, $http) {
    $scope.setup = function() {
      $http.get('/api/v1/people.json').then(function(response) {
        $scope.people = response.data;
      });
    };

    $scope.addPerson = function(name, bio) {
      var person = {
        name: name,
        bio: bio
      };
      $scope.people.push(person);
      $scope.newPersonName = '';
      $scope.newPersonBio = '';
    };

    $scope.deletePerson = function(index) {
      $scope.people.splice(index, 1);
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
