var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123abc',
          text: 'Walk the dog',
          completed: false,
          createdAt: 500,
          completedAt: null
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        createdAt: 500,
        completedAt: undefined
      }];

      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should update todo', () => {
      var todos = [
        {
          id: 11,
          text: 'Walk dog',
          completed: true,
          createdAt: 0,
          completedAt: 0
        }
      ];

      var updates = {
        completed: false,
        completedAt: null
      };

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].text).toEqual(todos[0].text);
    });
  });

  describe('authReducer', () => {
    it('should set uid on Login action', () => {
      const action = {
        type: 'LOGIN',
        uid: '123456789abc'
      };

      const res = reducers.authReducer(undefined, df(action));
      expect(res).toEqual({
        uid: action.uid
      });
    });

    it('should wipe auth on Logout action', () => {
      const authData = {
        uid: '123456789abc'
      };
      const action = {
        type: 'LOGOUT'
      };

      const res = reducers.authReducer(df(authData), df(action));
      expect(res).toEqual({});
    });

  });
});
