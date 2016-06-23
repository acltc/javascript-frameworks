/* global React */

var NameFilter = React.createClass({
  getInitialState: function() {
    return {
      nameFilter: ''
    };
  },
  handleChange: function(event) {
    this.setState({nameFilter: event.target.value});
    this.props.onNameFilter(event.target.value);
  },
  render: function() {
    return (
      <div>
        Name filter: <input value={this.state.nameFilter} onChange={this.handleChange} list="names-list" />
        <datalist id="names-list">
          {this.props.names.map(function(name) {
            return <option>{name}</option>;
          })}
        </datalist>

      </div>
    );
  }
});
