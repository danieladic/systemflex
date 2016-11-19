(function () {
    'use strict';

    angular
        .module('app.security.roles')
        .controller('AddRolesDialogController', AddRolesDialogController);
    /** @ngInject */
    function AddRolesDialogController($http, locals, WEBAPI) {
        var vm = this;

        //Data
        vm.role = {};
        vm.isEdit = false;
        vm.title = '';
        vm.locals = locals;

        //methods
        vm.saveRole = saveRole;


        function init() {
            if (vm.locals.roles) {
                vm.title = 'Editar perfil';
                vm.role = angular.copy(vm.locals.roles);
                vm.isEdit = true;
            } else {
                vm.title = 'Agregar perfil';
                vm.isEdit = false;
            }

        }


        function saveRole() {
            if (!vm.isEdit) {
                $http.post(WEBAPI.URL + '/api/Role', vm.role)
                   .success(function (data) {
                   vm.locals.rolesList.push(data);
                })
                .error(function (status) {

                });
            }
            else {
                $http.put(WEBAPI.URL + '/api/Role',vm.role)
                    .success(function (data) {
                   console.log(data.data);
                  })
                 .error(function (status) {

                 });

            }


        }

        init();
    }
})();
