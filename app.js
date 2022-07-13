// TODO
class GroceryListItem extends React.Component {

  // This function will be called when the first `<li>` below is clicked on
  // Notice that event handling functions receive an `event` object
  // We want to define it where it has access to `props`

  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {

    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.grocery}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery =>
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
);


var App = (props) => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['Cucumber', 'Kale']} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));