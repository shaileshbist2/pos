/**
 * Created by shailesh bist on 7/28/2016.
 */

(function () {
    angular.module('mainApp').controller('inventoryItemCtrl', ['$cookieStore', '$scope', 'authFact', '$location', 'appProxy', '$uibModal', function ($cookieStore, $scope, authFact, $location, appProxy, $uibModal) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');

        //**************************** admin_role_id == 1 **********************************

        $scope.add_inventory_item = function () {
            $scope.animate = !$scope.animate;
        };

        //** Dropdown List
        $scope.inventoryCategoryList_SA = function () {
            $scope.inventoryCatList_SA = [];
            appProxy.inventoryCategoryList_SA().then(function(response){
                $scope.inventoryCatList_SA = response.data[0].inventoryCategoryList;
            });
        };
        $scope.inventoryCategoryList_SA();

        $scope.addInventoryItem_SA = function () {
            var inventory_category_id = $scope.inventoryItem.inventory_category_id;
            var item_name = $scope.inventoryItem.item_name;
            var status = $scope.inventoryItem.status;
            appProxy.addInventoryItem_SA(inventory_category_id, item_name, status).then(function (response) {
                $scope.inventoryItem = null;
                $scope.inventoryItemList_SA();
                $scope.animate = !$scope.animate;
            });
        };

        $scope.inventoryItemList_SA = function () {
            $scope.iiL = [];
            appProxy.inventoryItemList_SA().then(function (reponse) {
                $scope.iiL = reponse.data[0].inventoryItemList;
            });
        };
        $scope.inventoryItemList_SA();

        $scope.editItem_SA = function (inventoryItem) {
            $scope.editPanelII_SA = true;
            $scope.editInventoryItem = angular.copy(inventoryItem);
        };

        $scope.updateInventoryItem_SA = function () {
            console.log($scope.editInventoryCategory);
            appProxy.updateInventoryItem_SA($scope.editInventoryItem).then(function (response) {
                $scope.inventoryItemList_SA();
                $scope.editInventoryItem = null;
                $scope.editPanelII_SA = false;
            });
        };

        $scope.closeII = function(){
            $scope.editPanelII_SA = false;
        };

    }]);
}());