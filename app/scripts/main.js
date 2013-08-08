require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery',
    underscore: '../bower_components/lodash/lodash',
    backbone: '../bower_components/backbone-amd/backbone',
    mockjax: '../bower_components/jquery-mockjax/jquery.mockjax'
  },
  shim: {
    mockjax: {
      deps: ['jquery']
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

require(['jquery', 'app'], function ($, app) {
  'use strict';

  $(document).ready(function() {
    // use app here
    app.start();
  });
  
});
