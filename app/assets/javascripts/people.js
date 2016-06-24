/* global Vue, $ */

new Vue({
  el: '#app',
  data: {
    people: [],
    newPersonName: '',
    newPersonBio: '',
    nameFilter: '',
    orderAttribute: '',
    orderDescending: -1
  },
  ready: function() {
    $.get('/api/v1/people.json', function(result) {
      this.people = result.map(function(person) {
        person.bioStrikeThrough = false;
        return person;
      });
    }.bind(this));
  },
  methods: {
    addPerson: function(name, bio) {
      var person = {
        name: name,
        bio: bio
      };
      this.people.push(person);
      this.newPersonName = '';
      this.newPersonBio = '';
    },
    deletePerson: function(index) {
      this.people.splice(index, 1);
    },
    toggleBio: function(person) {
      person.bioStrikeThrough = !person.bioStrikeThrough;
    },
    toggleOrder: function(attribute) {
      if (attribute !== this.orderAttribute) {
        this.orderDescending = 0;
      } else if (this.orderDescending === -1) {
        this.orderDescending = 0;
      } else {
        this.orderDescending = -1;
      }
      this.orderAttribute = attribute;
    }
  }
});
