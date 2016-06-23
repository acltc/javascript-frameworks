/* global React */

var Person = React.createClass({
  handleClick: function() {
    this.props.onDeletePerson(this.props.id);
  },
  render: function() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.bio}</p>
        <a href="#" onClick={this.handleClick}>Delete</a>
      </div>
    );
  }
});
