/*global define */
define(['collections/todos', 'mock'], function (TodoList, Mock) {
    'use strict';

    Mock.mock();

    var App = {
    	start: function() {
    		var todos = new TodoList();
    		
    		todos.on('reset', function() {
    			console.log(todos.toJSON());
    		});

    		todos.fetch({reset: true});
    	}
    };

    return App;
});