(function () {
    'use strict';
    angular
        .module('app.security.roles_users')
        .controller('RolesUsersController', RolesUsersController)

    /** @ngInject */
    function RolesUsersController($http, $scope, rolesUsersModal, WEBAPI) {
        var vm = this;
        //data
        vm.rolesUsersList = [];

         //Methods
        vm.addRolesUsersDialog = addRolesUsersDialog;
        function int() {
            $http.get(WEBAPI.URL + '/api/RolesUsers')
            .success(function (data) {
                vm.rolesUsersList = data;
                if (!$scope.$$phase) {
                    $scope.$digest();
                };
            })
            .error(function (data) {

            });
        }

        function addRolesUsersDialog(subject, to, text) {
            rolesUsersModal.open({
                subject: subject,
                to: to,
                text: text
            });

        }
        int();
    }
})();