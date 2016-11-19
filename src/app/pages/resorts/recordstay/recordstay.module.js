(function () {
    'use strict';

    angular.module('app.resorts.recordstay', [])
      .config(routeConfig);


    function routeConfig($stateProvider) {
        $stateProvider
          .state('resorts.recordstay', {
              url: '/historialEstancia',
              templateUrl: 'app/pages/resorts/recordstay/recordstay.html',
              controller: 'RecordStayController as vm',
              title: 'Hist. de estancia',
              sidebarMeta: {
                  order: 2,
              },
          });
    }
})();