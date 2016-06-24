var People = React.createClass({
  getInitialState: function() {
    return {
      people: [],
      newPersonName: '',
      newPersonBio: '',
      nameFilter: '',
      orderAttribute: null,
      orderDescending: false
    };
  },
  componentDidMount: function() {
    $.get('/api/v1/people.json', function(result) {
      this.setState({
        people: result
      });
    }.bind(this));
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
  handleOrder: function(orderAttribute) {
    var orderDescending;
    if (orderAttribute !== this.state.orderAttribute) {
      orderDescending = false;
    } else {
      orderDescending = !this.state.orderDescending;
    }
    this.setState({
      people: this.state.people.sort(function(a, b) {
        if (orderDescending) {
          return a[orderAttribute] < b[orderAttribute];
        } else {
          return a[orderAttribute] > b[orderAttribute];
        }
      }),
      orderAttribute: orderAttribute,
      orderDescending: orderDescending
    });
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
          Name filter: <input value={this.state.nameFilter} onChange={this.handleNameFilter} list="names-list" />
          <datalist id="names-list">
            {this.state.people.map(function(person) {
              return <option>{person.name}</option>;
            })}
          </datalist>
        </div>
        <div>
          <button onClick={this.handleOrder.bind(this, 'name')}>Order by name</button>
          <button onClick={this.handleOrder.bind(this, 'bio')}>Order by bio</button>
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
