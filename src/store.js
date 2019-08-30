import { createStore } from 'redux';

const initialState = {
  number: 0,
  people: ['John', 'Lisa']
};

// action types. Useful in large applications for defining the possible redux actions that can occur
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_PERSON = 'ADD_PERSON';

// reducers are called reducers because they take in the the current state and action to be applied and then return the next state. It continues to do this as new actions are dispatched, returning the new state each time. In this way it operates on a collection of actions and updates state accordingly. Backing out, pretend you have 15 actions in a row and initial state. You could call the reducer for the first action, calculate the next state and return it. Then the reducer would be called again passed the updated state and the next action which would again calculate the next state. So on and so forth until you get the final state. You have reduced n number of actions updating state every time until you arrive at the final state
function reducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case ADD_PERSON:
      return {
        ...state,
        people: [...state.people, payload]
      };
    default:
      return state;
  }
}

// create store method invoked with our reducer will return an object that has various methods we can update our store with
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
