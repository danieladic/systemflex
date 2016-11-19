(function () {
'use strict';
angular
     .module('app.security.users')
     .controller('addUsersDialogController', addUsersDialogController);
    /** @ngInject */
function addUsersDialogController($http, $scope, WEBAPI, locals, toastr, toastrConfig) {
    var vm = this;
    var defaultConfig = angular.copy(toastrConfig);
    $scope.types = ['success', 'error', 'info', 'warning'];
    //Data 
    vm.user = {};
    vm.locals = locals;
    vm.title = '';
    vm.isEdit = false;
    vm.showFieldIsActive = false;
    //methods 
    vm.saveUser = saveUser;
    function init() {
        if (vm.locals.users) {
            vm.title = "Editar Usuario";
            //vm.user = vm.locals.user;
            vm.isEdit = true
            getByUserId(vm.locals.users.id);
            vm.showFieldIsActive = true;
        } else {
            vm.title = "Agregar Usuario";
            vm.isEdit = false;
        };
    }
    var openedToasts = [];
    $scope.options = {
        autoDismiss: false,
        positionClass: 'toast-top-right',
        type: 'info',
        timeOut: '5000',
        extendedTimeOut: '2000',
        allowHtml: false,
        closeButton: false,
        tapToDismiss: true,
        progressBar: false,
        newestOnTop: true,
        maxOpened: 0,
        preventDuplicates: false,
        preventOpenDuplicates: false,
        title: "",
        msg: "se guardo correctamente"
    };
    function getByUserId(id) {
        $http.get(WEBAPI.URL + '/api/User/GetUserById/{Id}', {
            params: {id: id}
        })
         .success(function (data) {
             vm.user = data;
         })
            .error(function (data) {

            })
    }
   
    function saveUser() {
        if (!vm.isEdit) {
            vm.user.isActive = true;
            $http.post(WEBAPI.URL + '/api/user', vm.user)
            .success(function (data) {
                vm.locals.userList.push(data);
                $scope.$apply();
                //var type = Math.floor(Math.random() * $scope.types.length);
                //var toastType = $scope.types[type];
                //openedToasts.push(toastr[toastType](toastQuote.message, toastQuote.title, toastQuote.options));
                //$scope.optionsStr = "toastr." + toastType + "(\'" + toastQuote.message + "\', \'" + toastQuote.title + "', " + JSON.stringify(toastQuote.options || {}, null, 2) + ")";
            })
            .error(function (data) {

            });
        } else {
            $http.put(WEBAPI.URL + '/api/user', vm.user)
            .success(function (data) {
                console.log(data.data);
                $scope.$apply();
            })
            .error(function (data) {

            });
        };
    }
   
    init();
}
})();