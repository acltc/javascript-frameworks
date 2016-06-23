/* global React */

var People = React.createClass({
  getInitialState: function() {
    return {
      people: [
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
      ]
    };
  },
  handleCreatePerson: function(name, bio) {
    var newPerson = {
      name: name,
      bio: bio
    };
    this.setState({
      people: this.state.people.concat([newPerson])
    });
  },
  handleDeletePerson: function(id) {
    this.setState({
      people: this.state.people.filter(function(person) {
        return person.id !== id;
      })
    });
  },
  render: function() {
    return (
      <div>
        <NewPersonForm onCreatePerson={this.handleCreatePerson} />
        {this.state.people.map(function(person) {
          return <Person name={person.name} bio={person.bio} id={person.id} onDeletePerson={this.handleDeletePerson} />;
        }.bind(this))}
      </div>
    );
  }
});
