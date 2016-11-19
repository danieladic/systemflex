(function () {
    'use strict'
    angular
    .module('app.security.login')
    .controller('LoginController', LoginController)
    function LoginController($window, $state, $http, WEBAPI, session) {
        //Data
        var vm = this;
        //Methods
        vm.login = login;

        function login() {
            $http.post(WEBAPI.URL + '/api/Login/Account', vm.user)
            .success(function (data) {
                session.setSession(data);
                $state.go('resorts.lodgment');
            })
            .error(function (data) {

            });
            
        }
    }
})();