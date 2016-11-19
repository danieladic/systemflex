(function () {
    'use strict';
    angular
         .module('app.security.roles_users')
         .controller('addRolesUsersDialogController', addRolesUsersDialogController);
    /** @ngInject */
    function addRolesUsersDialogController(subject, to, text) {
        var vm = this;
        vm.subject = subject;
        vm.to = to;
        vm.text = text;
    }
})();