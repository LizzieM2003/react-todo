var $ = require('jQuery');

module.exports = {
  // setTodos: function(todos) {
  //   if ($.isArray(todos)) {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //     return todos;
  //   }
  // },
  // getTodos: function() {
  //   var stringTodos = localStorage.getItem('todos');
  //   var todos = [];
  //   try {
  //       todos = JSON.parse(stringTodos);
  //   } catch (e) {
  //
  //   }
  //
  //   return $.isArray(todos) ? todos :  [];
  // },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      // if (searchText.length === 0) {
      //   return todo;
      // } else if (todo.text.toLowerCase().indexOf(searchText) !== -1) {
      //   return todo;
      // }
      var todoText = todo.text.toLowerCase();
      return searchText.length === 0 || todoText.indexOf(searchText) > -1;
    });

    // Sort todos with non completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });
    return filteredTodos;
  }
};
