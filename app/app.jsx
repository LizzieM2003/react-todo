var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Take Hannah to the hairdressers'));
store.dispatch(actions.setSearchText('hannah'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.querySelector('#app')
);
