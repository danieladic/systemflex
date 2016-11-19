(function () {
    'use strict';
    angular
    .module('app.security.roles')
    .controller('DeleteRolesDialogController', DeleteRolesDialogController)
    function DeleteRolesDialogController(locals, WEBAPI, $http) {
        var vm = this;
        //Data 
        vm.locals = locals;
        //Methods
        vm.deleteRole = deleteRole;

        function deleteRole() {
            $http.delete(WEBAPI.URL + '/api/Role', {
                params: {id: vm.locals.roles.roleId}
        })
            .success(function (data) {
                vm.locals.rolesList = _.reject(vm.locals.rolesList, function rejectRole() { return rejectRole.id == vm.locals.roles.id });
                console.log(data.data);

            })
            .error(function (data) {

            });
        }

    }
})();