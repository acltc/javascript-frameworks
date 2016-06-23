/* global React */

var Person = React.createClass({
  getInitialState: function() {
    return {
      bioVisible: true
    };
  },
  toggleBio: function() {
    this.setState({
      bioVisible: !this.state.bioVisible
    });
  },
  handleClick: function() {
    this.props.onDeletePerson(this.props.id);
  },
  render: function() {
    return (
      <div>
        <h2 onClick={this.toggleBio}>{this.props.name}</h2>
        { this.state.bioVisible ? <p>{this.props.bio}</p> : null }
        <a href="#" onClick={this.handleClick}>Delete</a>
      </div>
    );
  }
});
