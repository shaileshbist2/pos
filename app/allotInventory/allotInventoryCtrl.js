/**
 * Created by shailesh bist on 7/28/2016.
 */
(function () {
    angular.module('mainApp').controller('allotInventoryCtrl', ['$cookieStore', '$scope', 'authFact', '$location', 'appProxy', '$uibModal', 'utilMethods', '$routeParams', '$filter', function ($cookieStore, $scope, authFact, $location, appProxy, $uibModal, utilMethods, $routeParams, $filter) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');

        $scope.screenMode = 0;
        $scope.stock = [];
        $scope.newAllotment = {};
        $scope.IL_SA = [];

        $scope.selectedInventory = {};
        $scope.allotmentHistory = [];
        $scope.wastageHistory = [];
        $scope.totalAllotment = 0;
        $scope.totalWastage = 0;

        $scope.sDate = new Date();
        $scope.eDate = new Date();


        $('.selectCalender').daterangepicker({
            locale: {
                format: 'YYYY-MM-DD'
            }
        }, function (start, end) {
            $scope.sDate = start.format('YYYY-MM-DD');
            $scope.eDate = end.format('YYYY-MM-DD');
            $scope.getInventoryAllotmentHistory($scope.selectedInventory);
        });

        //************ SUPER ADMIN PANEL *****************
        $scope.allot_inventory_SA = function () {
            $scope.animate = !$scope.animate;
        };

        // Get branch locations
        $scope.locationList_allotInventory_SA = function () {
            $scope.pageLoader = true;
            $scope.IL_SA = [];
            appProxy.locationList_allotInventory_SA().then(function (response) {
                $scope.IL_SA = response.data[0].locationList;
                $scope.newAllotment.branch_id = $scope.IL_SA[0].branch_id;
                $scope.pageLoader = false;
                $scope.getItemList_allotInventory_SA();
            }, function (response) {
                utilMethods.showErrorMessageBox(response.message);
            });
        };

        // Get inventory item list
        $scope.getItemList_allotInventory_SA = function () {
            $scope.pageLoader = false;
            appProxy.getItemList_allotInventory_SA($scope.newAllotment.branch_id).then(function (response) {
                $scope.stock = response.data[0].stock;
                $scope.pageLoader = false;
            }, function (response) {
                utilMethods.showErrorMessageBox(response.message);
            });
        };

        // Get inventory stock list
        $scope.inventoryList_allotInventory_SA = function () {
            $scope.pageLoader = true;
            $scope.iL_SA = [];
            appProxy.inventoryList_allotInventory_SA().then(function (response) {
                $scope.iL_SA = response.data[0].inventoryList;
                $scope.pageLoader = false;
            }, function (response) {
                utilMethods.showErrorMessageBox(response.message);
            });
        };

        // Get inventory allotment history
        $scope.getInventoryAllotmentHistory = function (inventory) {
            $scope.totalAllotment = 0;
            $scope.totalWastage = 0;
            $scope.selectedInventory = angular.copy(inventory);
            $scope.pageLoader = true;
            $scope.screenMode = 1;
            appProxy.getInventoryAllotmentHistory($scope.newAllotment.branch_id, inventory.inventoryId, $filter('date')($scope.sDate, 'yyyy-MM-dd'), $filter('date')($scope.eDate, 'yyyy-MM-dd')).then(function (data) {
                $scope.allotmentHistory = data.data[0].allotmentHistory;
                $scope.wastageHistory = data.data[0].wastageHistory;
                for (var i = 0; i <= $scope.allotmentHistory.length - 1; i++) {
                    $scope.totalAllotment += parseInt($scope.allotmentHistory[i].quantity);
                }
                for (var i = 0; i <= $scope.wastageHistory.length - 1; i++) {
                    $scope.totalWastage += parseInt($scope.wastageHistory[i].quantity);
                }
                $scope.pageLoader = false;
            }, function (response) {
                utilMethods.showErrorMessageBox(response.message);
            });
        };

        // New Allotment
        $scope.addInventoryItemTo_branch = function () {
            utilMethods.showAllotmentConfirmationBox("Do you want to reset the previous stock?").result.then(function (data) {
                appProxy.addNewInventoryAfterReset($scope.newAllotment.branch_id, $scope.newAllotment.inventory_id, $scope.newAllotment.quantity).then(function (response) {
                    if (response.message == 'Success') {
                        alert('Item Added Successfully');
                        $scope.newAllotment.inventory_id = null;
                        $scope.newAllotment.quantity = null;
                        $scope.allot_inventory_SA();
                        $scope.getItemList_allotInventory_SA();
                    }
                }, function (response) {
                    utilMethods.showErrorMessageBox(response.message);
                });
            }, function () {
                appProxy.addInventoryItemTo_branch($scope.newAllotment.branch_id, $scope.newAllotment.inventory_id, $scope.newAllotment.quantity).then(function (response) {
                    if (response.message == 'success') {
                        alert('Item Added Successfully');
                        $scope.newAllotment.inventory_id = null;
                        $scope.newAllotment.quantity = null;
                        $scope.allot_inventory_SA();
                        $scope.getItemList_allotInventory_SA();
                    }
                }, function (response) {
                    utilMethods.showErrorMessageBox(response.message);
                });
            });
        };

        $scope.back = function () {
            if ($scope.screenMode > 0) $scope.screenMode -= 1;
        };

        var init = function () {
            $scope.locationList_allotInventory_SA();
            $scope.inventoryList_allotInventory_SA();
        };
        init();
    }]);
}());