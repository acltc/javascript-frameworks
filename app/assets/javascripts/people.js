/* global Vue, $ */

new Vue({
  el: '#app',
  data: {
    people: [],
    newPersonName: '',
    newPersonBio: '',
    nameFilter: '',
    orderAttribute: '',
    orderDescending: -1,
    errors: []
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
      this.errors = [];
      var params = {
        name: name,
        bio: bio
      };
      $.post('/api/v1/people.json', params).done(function(result) {
        result.bioStrikeThrough = false;
        this.people.push(result);
        this.newPersonName = '';
        this.newPersonBio = '';
      }.bind(this)).fail(function(result) {
        this.errors = result.responseJSON.errors;
        console.log(this.people);
      }.bind(this));
    },
    deletePerson: function(person) {
      $.ajax({
        url: '/api/v1/people/' + person.id + '.json',
        type: "DELETE"
      }).done(function(response) {
        this.people = this.people.filter(function(p) {
          return p.id !== person.id;
        });
      }.bind(this));
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
