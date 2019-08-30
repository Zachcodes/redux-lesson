# Pre Lesson

1. Start out with a whiteboard example of a complex app that deals with users and posts. Show how it can be very complex to have to pass stuff down multiple levels. Then show how redux can solve our problem by allowing us to get details from the store. 

2. Next, walk through the redux companion repl

- https://repl.it/@ZachSpringer12a/redux-companion

# Lesson

1. Start out with pre built create-react-app

2. Install redux

3. create the store

4. Import the store into app.js

- Set the value of state to have one property, store which is grabbed from store.getState
console.log state 
- Set a console log in the reducer to view the initial value of state and set a console log of store in app.js
- Show that decrement and increment dont work now. alter to be based off this.state.store.number in display and methods

5. Next, have the class install redux dev tools. 

- Add line to enable redux dev tools in the store 
- Now show how the value of number in state does not change even when incrementing and decrementing

6. Next, set up some action type strings in the store for incrementing and decrementing values

- Alter the reducer to use a switch type explaining why we do this
- now in app js import the type and create corresponding methods to update the values

7. Now show in redux dev tools that the value in store is updating but the value on state is not

- create a componentDidMount method that invokes subscribeStore and sets state
- Show that state is now getting updated. Explain subscribe with a console log showing how it gets invoked every time an action updates the state of the store

8. Now show to how pass through a payload

- add a type ADD_PERSON
- add a person property to state with initial value
- add a case to handle
- import add person action type and alter method to use dispatch
- show how it over writes state without destrcutring the rest of state
- Alter case statement to return the rest of state

# Post Lecture

1. Build out the mini if time
