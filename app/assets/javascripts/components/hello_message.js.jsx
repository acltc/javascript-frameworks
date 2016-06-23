var HelloMessage = React.createClass({
  propTypes: {
    name: React.PropTypes.node
  },

  render: function() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
      </div>
    );
  }
});
