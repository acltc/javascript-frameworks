/* global React, $ */

var People = React.createClass({
  getInitialState: function() {
    return {
      people: [],
      nameFilter: ''
    };
  },
  componentDidMount: function() {
    $.get('/api/v1/people.json', function(result) {
      this.setState({
        people: result
      });
    }.bind(this));
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
  handleNameFilter: function(nameFilter) {
    this.setState({
      nameFilter: nameFilter
    });
  },
  handleOrder: function(orderAttribute, orderDescending) {
    this.setState({
      people: this.state.people.sort(function(a, b) {
        if (orderDescending) {
          return a[orderAttribute] < b[orderAttribute];
        } else {
          return a[orderAttribute] > b[orderAttribute];
        }
      })
    });
  },
  render: function() {
    var nameFilter = this.state.nameFilter;
    var filteredPeople = this.state.people.filter(function(person) {
      return person.name.toLowerCase().includes(nameFilter.toLowerCase());
    });
    var names = this.state.people.map(function(person) {
      return person.name;
    });
    return (
      <div>
        <NewPersonForm onCreatePerson={this.handleCreatePerson} />
        <NameFilter onNameFilter={this.handleNameFilter} names={names} />
        <OrderToolbar onOrder={this.handleOrder} />
        {filteredPeople.map(function(person) {
          return <Person name={person.name} bio={person.bio} id={person.id} onDeletePerson={this.handleDeletePerson} />;
        }.bind(this))}
      </div>
    );
  }
});
