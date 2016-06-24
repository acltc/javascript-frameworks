/* global Vue */

new Vue({
  el: '#app',
  data: {
    people: [
      {
        id: 1,
        name: "Jackie Kuhlman",
        bio: "Qui quibusdam aut. Iusto est numquam est excepturi aspernatur quia omnis. Perferendis aliquam qui nisi nemo. Et sunt hic molestiae voluptate.",
        bioStrikeThrough: false
      },
      {
        id: 2,
        name: "Ivah Kautzer",
        bio: "Autem numquam qui quas. Veniam animi ut. Ut porro voluptatem laboriosam fugit temporibus sint soluta. Et aut autem iure. Beatae ea quo labore quaerat et.",
        bioStrikeThrough: false
      },
      {
        id: 3,
        name: "Alice Goodwin",
        bio: "Dolores laboriosam et rerum. Nihil explicabo quos. Commodi officiis architecto ad quibusdam aliquid consequuntur. Accusantium dolore quidem corporis est non debitis.",
        bioStrikeThrough: false
      },
      {
        id: 4,
        name: "Danyka Renner",
        bio: "Vitae unde aliquid. Reprehenderit in itaque quae est et et temporibus. Laboriosam et aliquam tempore beatae. Rerum iure mollitia enim.",
        bioStrikeThrough: false
      },
      {
        id: 5,
        name: "Hipolito Orn",
        bio: "Aperiam voluptate sed ipsam nihil ut et. Et perspiciatis consequatur tempora deserunt nesciunt eaque fugiat. Enim recusandae eum et. Dolore dolorum nobis et et.",
        bioStrikeThrough: false
      }
    ],
    newPersonName: '',
    newPersonBio: '',
    nameFilter: ''
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
    }
  }
});
