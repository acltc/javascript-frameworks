/* global React */

var NewPersonForm = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      bio: ''
    };
  },
  handleChangeName: function(event) {
    this.setState({name: event.target.value});
  },
  handleChangeBio: function(event) {
    this.setState({bio: event.target.value});
  },
  handleClickSubmit: function() {
    this.props.onCreatePerson(this.state.name, this.state.bio);
    this.setState({
      name: '',
      bio: ''
    });
  },
  render: function() {
    return (
      <div>
        Name: <input value={this.state.name} onChange={this.handleChangeName} />
        Bio: <input value={this.state.bio} onChange={this.handleChangeBio} />
        <button onClick={this.handleClickSubmit}>Add Person</button>
      </div>
    );
  }
});
