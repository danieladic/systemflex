/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    //service
    'app.services',
    //app
    'app.security',
    //app
    'app.resorts',
    //'BlurAdmin.pages.components'
    ////'BlurAdmin.pages.dashboard',
    //'BlurAdmin.pages.ui',
    //'BlurAdmin.pages.form',
    //'BlurAdmin.pages.tables',
    //'BlurAdmin.pages.charts',
    //'BlurAdmin.pages.maps',
    //'BlurAdmin.pages.profile',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
      //$urlRouterProvider.otherwise('/dashboard');
  }

})();
