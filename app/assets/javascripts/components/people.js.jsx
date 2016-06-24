var People = React.createClass({
  getInitialState: function() {
    return {
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
    };
  },
  handleChangeName: function(event) {
    this.setState({newPersonName: event.target.value});
  },
  handleChangeBio: function(event) {
    this.setState({newPersonBio: event.target.value});
  },
  handleCreatePerson: function() {
    var newPerson = {
      name: this.state.newPersonName,
      bio: this.state.newPersonBio
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
  toggleBio: function(id) {
    this.setState({
      people: this.state.people.map(function(person) {
        if (person.id === id) {
          return {
            id: person.id,
            name: person.name,
            bio: person.bio,
            bioStrikeThrough: !person.bioStrikeThrough
          };
        } else {
          return person;
        }
      })
    });
  },
  handleNameFilter: function(event) {
    this.setState({nameFilter: event.target.value});
  },
  render: function() {
    var nameFilter = this.state.nameFilter;
    var filteredPeople = this.state.people.filter(function(person) {
      return person.name.toLowerCase().includes(nameFilter.toLowerCase());
    });
    return (
      <div>
        <div>
          Name: <input value={this.state.newPersonName} onChange={this.handleChangeName} />
          Bio: <input value={this.state.newPersonBio} onChange={this.handleChangeBio} />
          <button onClick={this.handleCreatePerson}>Add Person</button>
        </div>
        <div>
          Name filter: <input value={this.state.nameFilter} onChange={this.handleNameFilter} />
        </div>
        {filteredPeople.map(function(person) {
          var bioClass = '';
          if (person.bioStrikeThrough) {
            bioClass = 'strike';
          }
          return (
            <div>
              <h2 onClick={this.toggleBio.bind(this, person.id)}>{person.name}</h2>
              <p className={bioClass}>{person.bio}</p>
              <a href="#" onClick={this.handleDeletePerson.bind(this, person.id)}>Delete</a>
            </div>
          );
        }.bind(this))}
      </div>
    );
  }
});
