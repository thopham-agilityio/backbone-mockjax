/* global define */
define(function() {
	'use strict';

	/**
	 * This function is used to trigger mocking. It should be called before any AJAX request.
	 * @return {function}
	 */
	var mock = function() {

		$.mockjax(function(settings) {

      // GET /api/todos - Get todo list
      if (settings.url.match(/\/api\/todos/)) {

        return {
          proxy: '/scripts/jsons/todos.json'
        };
      }
    });
	};

	return {
		mock: mock
	};
});