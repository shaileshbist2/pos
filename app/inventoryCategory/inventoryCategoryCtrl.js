/**
 * Created by shailesh bist on 7/28/2016.
 */

(function () {
    angular.module('mainApp').controller('inventoryCategoryCtrl', ['$cookieStore', '$scope', 'authFact', '$location', 'appProxy', '$uibModal', function ($cookieStore, $scope, authFact, $location, appProxy, $uibModal) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');

        //**************************** admin_role_id == 1 **********************************

        $scope.add_inventory_category = function () {
            $scope.animate = !$scope.animate;
        };

        $scope.addInventoryCategory_SA = function () {
            var category_name = $scope.inventoryCategory.category_name;
            var status = $scope.inventoryCategory.status;
            appProxy.addInventoryCategory_SA(category_name, status).then(function (response) {
                $scope.inventoryCategory = null;
                $scope.inventoryCategoryList_SA();
                $scope.animate = !$scope.animate;
            });
        };

        $scope.inventoryCategoryList_SA = function(){
            $scope.iCL = [];
            appProxy.inventoryCategoryList_SA().then(function(reponse){
                $scope.iCL = reponse.data[0].inventoryCategoryList;
            });
        };
        $scope.inventoryCategoryList_SA();
        
        $scope.editCategory_SA = function(inventoryCategory){
            $scope.editPanelIC_SA = true;
            $scope.editInventoryCategory = angular.copy(inventoryCategory);
        };
        
        $scope.updateInventoryCategory_SA = function(){
            appProxy.updateInventoryCategory_SA($scope.editInventoryCategory).then(function(response){
                $scope.inventoryCategoryList_SA();
                $scope.editInventoryCategory = null;
                $scope.editPanelIC_SA = false;
            });
        };

        $scope.closeIC = function(){
            $scope.editPanelIC_SA = false;
        };

    }]);
}());