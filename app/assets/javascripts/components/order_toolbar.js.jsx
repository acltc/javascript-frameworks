/* global React */

var OrderToolbar = React.createClass({
  handleClickName: function() {
    this.props.onOrder('name');
  },
  handleClickBio: function() {
    this.props.onOrder('bio');
  },
  render: function() {
    return (
      <div>
        <button onClick={this.handleClickName}>Order by name</button>
        <button onClick={this.handleClickBio}>Order by bio</button>
      </div>
    );
  }
});
