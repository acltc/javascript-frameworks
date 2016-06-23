/* global React */

var Person = React.createClass({
  getInitialState: function() {
    return {
      bioStrikeThrough: false
    };
  },
  toggleBio: function() {
    this.setState({
      bioStrikeThrough: !this.state.bioStrikeThrough
    });
  },
  handleClick: function() {
    this.props.onDeletePerson(this.props.id);
  },
  render: function() {
    var bioClass = '';
    if (this.state.bioStrikeThrough) {
      bioClass = 'strike';
    }
    return (
      <div>
        <h2 onClick={this.toggleBio}>{this.props.name}</h2>
        <p className={bioClass}>{this.props.bio}</p>
        <a href="#" onClick={this.handleClick}>Delete</a>
      </div>
    );
  }
});
