/**
 * Created by shailesh bist on 7/28/2016.
 */


(function () {
    angular.module('mainApp').controller('manageInventoryCtrl', ['$cookieStore', '$scope', 'authFact', '$location', 'appProxy', '$uibModal', 'utilMethods', function ($cookieStore, $scope, authFact, $location, appProxy, $uibModal, utilMethods) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');

        //************ SUPER ADMIN PANEL *****************
        $scope.IL_SA = [];
        $scope.addQuantity = {};

        $scope.add_inventory_SA = function () {
            $scope.animate = !$scope.animate;
        };

        $scope.add_new_inventory_SA = function () {
            $scope.pageLoader = true;
            var inventory_name = $scope.inventory.inventory_name;
            var measurement_id = $scope.inventory.measurement_id;
            appProxy.add_new_inventory_SA(inventory_name, measurement_id).then(function (response) {
                if (response.message == 'success') {
                    $scope.inventory = null;
                    $scope.inventoryList_manageInventory_SA();
                    $scope.pageLoader = false;
                } else {
                    alert('failed');
                }
            }, function (response) {
                utilMethods.showErrorMessageBox(response.message);
            });
        };


        $scope.inventoryList_manageInventory_SA = function () {
            $scope.pageLoader = true;
            appProxy.inventoryList_manageInventory_SA().then(function (response) {
                if (response.message == 'success') {
                    $scope.IL_SA = response.data[0].inventoryList;
                    $scope.pageLoader = false;
                } else {

                }
            }, function (response) {
                utilMethods.showErrorMessageBox(response.message);
            });
        };
        $scope.inventoryList_manageInventory_SA();


        $scope.editInventory_SA = function (inventory_id) {
            $scope.inventoryName = inventory_id;
            $scope.inventoryNameSelected = inventory_id;
            $scope.measurement = inventory_id;
            $scope.measurementSelected = inventory_id;
            $scope.selectedItemName = inventory_id;
            $scope.editBtn = inventory_id;
            $scope.saveBtn = inventory_id;
            $scope.cancelBtn = inventory_id;
        };

        $scope.updateInventory_SA = function (il) {
            $scope.pageLoader = true;
            var inventory_id = il.inventory_id;
            var inventory_name = il.inventory_name;
            var measurement_id = il.measurement_id;
            appProxy.updateInventory_SA(inventory_id, inventory_name, measurement_id).then(function (response) {
                if (response.message == 'success') {
                    $scope.inventoryList_manageInventory_SA();
                    $scope.inventoryName = null;
                    $scope.inventoryNameSelected = null;
                    $scope.measurement = null;
                    $scope.measurementSelected = null;
                    $scope.editBtn = null;
                    $scope.saveBtn = null;
                    $scope.cancelBtn = null;
                    $scope.pageLoader = false;
                } else {
                    $scope.inventoryName = null;
                    $scope.inventoryNameSelected = null;
                    $scope.measurement = null;
                    $scope.measurementSelected = null;
                    $scope.editBtn = null;
                    $scope.saveBtn = null;
                    $scope.cancelBtn = null;
                    $scope.pageLoader = false;
                }
            }, function (response) {
                utilMethods.showErrorMessageBox(response.message);
            });
        };

        $scope.cancelInventory_SA = function () {
            $scope.inventoryName = null;
            $scope.inventoryNameSelected = null;
            $scope.measurement = null;
            $scope.measurementSelected = null;
            $scope.editBtn = null;
            $scope.saveBtn = null;
            $scope.cancelBtn = null;
            $scope.inventoryList();
        };


        $scope.measurementList = function () {
            $scope.measurementList = [];
            appProxy.measurementList_SA().then(function (response) {
                $scope.measurementList = response.data[0].measurementList;
            });
        };
        $scope.measurementList();

        $scope.showAddQuantity = function (il) {
            $scope.addQuantity.quantity = '';
            $scope.addQuantity.inventoryId = il.inventory_id;
        };

        $scope.saveQuantity = function () {
            if ($scope.addQuantity.quantity > 0) {
                appProxy.addQuantity_SA($scope.addQuantity.inventoryId, $scope.addQuantity.quantity).then(function (response) {
                    if (!response.error) {
                        utilMethods.showInfoMessageBox("Quantity added successfully");
                        $('#myModal').modal('hide');
                        $scope.inventoryList_manageInventory_SA();
                    }
                }, function (response) {
                    $('#myModal').modal('hide');
                    utilMethods.showErrorMessageBox(response.message);
                });
            } else {
                $('#myModal').modal('hide');
                utilMethods.showErrorMessageBox("Quantity should be numeric and greater than zero");
            }
        }
    }]);
}());
