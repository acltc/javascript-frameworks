/* global angular */

(function() {
  angular.module('app').controller('peopleCtrl', function($scope) {
    $scope.people = [
      {
        id: 1,
        name: "Jackie Kuhlman",
        bio: "Qui quibusdam aut. Iusto est numquam est excepturi aspernatur quia omnis. Perferendis aliquam qui nisi nemo. Et sunt hic molestiae voluptate."
      },
      {
        id: 2,
        name: "Ivah Kautzer",
        bio: "Autem numquam qui quas. Veniam animi ut. Ut porro voluptatem laboriosam fugit temporibus sint soluta. Et aut autem iure. Beatae ea quo labore quaerat et."
      },
      {
        id: 3,
        name: "Alice Goodwin",
        bio: "Dolores laboriosam et rerum. Nihil explicabo quos. Commodi officiis architecto ad quibusdam aliquid consequuntur. Accusantium dolore quidem corporis est non debitis."
      },
      {
        id: 4,
        name: "Danyka Renner",
        bio: "Vitae unde aliquid. Reprehenderit in itaque quae est et et temporibus. Laboriosam et aliquam tempore beatae. Rerum iure mollitia enim."
      },
      {
        id: 5,
        name: "Hipolito Orn",
        bio: "Aperiam voluptate sed ipsam nihil ut et. Et perspiciatis consequatur tempora deserunt nesciunt eaque fugiat. Enim recusandae eum et. Dolore dolorum nobis et et."
      }
    ];

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
      $scope.orderAttribute = attribute;
    };

    window.scope = $scope;
  });
})();
