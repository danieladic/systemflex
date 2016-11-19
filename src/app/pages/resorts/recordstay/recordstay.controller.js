(function () {
    'use strict';

    angular
        .module('app.resorts.recordstay')
        .controller('RecordStayController', RecordStayController)


    function RecordStayController($http, $state, $scope, WEBAPI, deleteRecordStayModal) {
        /* viewModels */
        var vm = this;
        //Data
        vm.recordstayList = [];
        vm.strDt = Date();

        //Methods

        vm.GoToSelection = GoToSelection;
        vm.deleteRecordStay = deleteRecordStay;

        function int() {
            $http.get(WEBAPI.URL + '/api/VWStayDetail')
            .success(function (data) {
                vm.recordstayList = data;
                if (!$scope.$$phase) {
                    $scope.$digest();
                };
            })
            .error(function (data) {

            });
        }


        function GoToSelection() {
            $state.go('resorts.lodgment', null);
        }

        //vm.recordstayList[0] = {
        //    dateCreation: vm.strDt,
        //    nigthOfStay: 20,
        //    roomsNumber: 2
        //}


        //show delete dialog
        function deleteRecordStay(recordstay) {
            deleteRecordStayModal.open({
                locals: {
                    recordstay: recordstay,
                    recordstayList: vm.recordstayList
                }
            });
        }

        int();

    }
})();
