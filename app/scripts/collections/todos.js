/* global define */
define(['backbone', 'models/todo'], function(Backbone, Todo) {
	'use strict';

	var TodoList = Backbone.Collection.extend({
		url: 'api/todos',

		model: Todo,

		parse: function(response) {
			return response.todos;
		}
	});

	return TodoList;
});