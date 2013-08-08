/* global define */
define(['jquery', 'mockjax'], function($) {
	'use strict';

	/**
	 * This function is used to trigger mocking. It should be called before any AJAX request.
	 * @return {function}
	 */
	var mock = function() {

		$.ajaxSetup({
			dataType: 'json'
		});

		$.mockjax(function(settings) {

      // GET /api/todos - Get todo list
      if (settings.url.match(/api\/todos/)) {

        return {
          proxy: '/scripts/jsons/todo/todos.json'
        };
      }
    });
	};

	return {
		mock: mock
	};
});