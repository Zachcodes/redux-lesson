import React, { Component } from 'react';
import NumberDisplayer from './NumberDisplayer';
import NumberUpdater from './NumberUpdater';
import './App.css';
import store, { INCREMENT, DECREMENT, ADD_PERSON } from './store';

class App extends Component {
  constructor() {
    super();
    // set the initial values for first render
    this.state = {
      store: store.getState(),
      personName: ''
    };
  }

  componentDidMount() {
    // subscribe sets up a listener that will be fired every time the store is updated
    store.subscribe(() => {
      this.setState({ store: store.getState() });
    });
  }

  incrementNumber = () => {
    // this.setState({ store: { number: this.state.store.number + 1 } });
    // store.dispatch dispatches our actions to the store
    store.dispatch({ type: INCREMENT });
  };

  decrementNumber = () => {
    store.dispatch({ type: DECREMENT });
  };

  addPerson = () => {
    store.dispatch({ type: ADD_PERSON, payload: this.state.personName });
    this.setState({ personName: '' });
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <NumberDisplayer number={this.state.store.number} />
        <NumberUpdater
          increment={this.incrementNumber}
          decrement={this.decrementNumber}
        />
        {this.state.store.people.map((p, i) => {
          return <p key={`${p}-${i}`}>{p}</p>;
        })}
        <p>
          New Person:{' '}
          <input
            value={this.state.personName}
            name="personName"
            onChange={this.handleChange}
          />{' '}
        </p>
        <button onClick={this.addPerson}>Add person</button>
      </div>
    );
  }
}

export default App;
