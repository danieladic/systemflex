(function () {
    'use strict';
    angular
    .module('app.security.users')
    .controller('deletUsersDialogController', deletUsersDialogController);
    /*@ngInject*/
    function deletUsersDialogController($http, locals, WEBAPI ) {
        var vm = this;
        //Data
        vm.locals = locals;
        //Methods
        vm.deleteUser = deleteUser;
        function load() {
         
        }

        function deleteUser() {
            if (vm.locals.users.isActive == true) {
                vm.locals.users.isActive == false;
                $http.post(WEBAPI.URL + '/api/User/DisableUser', vm.locals.users)
                .success(function (data) {
                    console.log(data.data);
                })
                .error(function (data) {

                });
            }
        }

        load();
    }
})();