/* global React */

var OrderToolbar = React.createClass({
  getInitialState: function() {
    return {
      orderAttribute: null,
      orderDescending: false
    };
  },
  handleClickName: function() {
    this.handleOrder('name');
  },
  handleClickBio: function() {
    this.handleOrder('bio');
  },
  handleOrder: function(orderAttribute) {
    var orderDescending;
    if (orderAttribute !== this.state.orderAttribute) {
      orderDescending = false;
    } else {
      orderDescending = !this.state.orderDescending;
    }
    this.setState({
      orderAttribute: orderAttribute,
      orderDescending: orderDescending
    });
    this.props.onOrder(orderAttribute, orderDescending);
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
