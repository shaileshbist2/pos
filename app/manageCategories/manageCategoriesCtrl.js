/**
 * Created by shailesh bist on 7/28/2016.
 */

(function () {
    angular.module('mainApp').controller('manageCategoriesCtrl', ['$cookieStore', '$scope', 'authFact', '$location', 'appProxy', '$uibModal', function ($cookieStore, $scope, authFact, $location, appProxy, $uibModal) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');

        //**************************** admin_role_id == 1 **********************************

        $scope.getCategoryList = function () {
            $scope.categories = []; // array to show all categories list in data table
            $scope.pageLoader = true;
            var location_id = $scope.locationList.location_id;
            appProxy.getCategoryList(location_id).then(function (response) {
                $scope.categories = response.data[0].categories;
                $scope.pageLoader = false;
            });
        };
        $scope.addCategory = function () {
            var location_id = $scope.locationList.location_id;
            var category_name = $scope.category.category_name;
            var status = $scope.category.category_status;
            appProxy.addCategory(location_id, category_name, status).then(function (response) {
                if (response.message == 'category_exist') {
                    $scope.category_exist_error = true;
                } else {
                    $scope.getCategoryList();
                    $scope.animate = false;
                    $scope.category.category_name = '';
                    $scope.category.category_status = '';
                }
            });
        };
        $scope.editCategory = function (category_id) {
            $scope.catName = category_id;
            $scope.selectedCategoryName = category_id;
            $scope.selectedLocationName = category_id;
            $scope.catStatus = category_id;
            $scope.selectedCategoryStatus = category_id;
            $scope.editBtn = category_id;
            $scope.saveBtn = category_id;
            $scope.cancelBtn = category_id;
        };
        $scope.saveCategory = function (category) {
            var category_id = category.category_id;
            var branch_id = category.branch_id;
            var category_name = category.category_name;
            var status = category.status;
            appProxy.updateCategory(category_id, branch_id, category_name, status).then(function () {
                $scope.catName = null;
                $scope.selectedCategoryName = null;
                $scope.catStatus = null;
                $scope.selectedCategoryStatus = null;
                $scope.editBtn = null;
                $scope.saveBtn = null;
                $scope.cancelBtn = null;
            });
        };
        $scope.cancelCategory = function () {
            $scope.catName = null;
            $scope.selectedCategoryName = null;
            $scope.catStatus = null;
            $scope.selectedCategoryStatus = null;
            $scope.catLocation = null;
            $scope.editBtn = null;
            $scope.saveBtn = null;
            $scope.cancelBtn = null;
            $scope.getCategoryList();
        }
        $scope.add_Category = function () {
            $scope.animate = !$scope.animate;
        };

        //----------- Get Location Dropdown List -------------------
        $scope.locationDropdownList = function () {
            $scope.lDL = [];
            $scope.pageLoader = true;
            appProxy.locationDropdownList().then(function (response) {
                $scope.lDL = response.data[0].locationListData;
                $scope.pageLoader = false;
            });
        };
        $scope.locationDropdownList();

        //***********************************************************************************

        //**************************** admin_role_id == 2 ***********************************

        $scope.add_Category_A = function () {
            /*$scope.addCategoryContainer_A = !$scope.addCategoryContainer_A;*/
            $scope.animate = !$scope.animate;
        };
        $scope.categoryList_A = function () {
            $scope.category_list_A = [];
            appProxy.categoryList_A().then(function (response) {
                $scope.category_list_A = response.data[0].category_list;
            });
        };
        $scope.editCategory_A = function (category_id) {
            $scope.catName_A = category_id;
            $scope.selectedCategoryName_A = category_id;
            $scope.catStatus_A = category_id;
            $scope.selectedCategoryStatus_A = category_id;
            $scope.editBtn_A = category_id;
            $scope.saveBtn_A = category_id;
            $scope.cancelBtn_A = category_id;
        };
        $scope.cancelCategory_A = function () {
            $scope.catName_A = null;
            $scope.selectedCategoryName_A = null;
            $scope.catStatus_A = null;
            $scope.selectedCategoryStatus_A = null;
            $scope.editBtn_A = null;
            $scope.saveBtn_A = null;
            $scope.cancelBtn_A = null;
            $scope.categoryList_A();
        };
        $scope.addCategory_A = function (category_A) {
            var category_name = category_A.category_name;
            var status = category_A.status;
            appProxy.addCategory_A(category_name, status).then(function (response) {
                if (response.message == 'category_exist') {
                    $scope.category_exist_error_A = true;
                } else {
                    $scope.categoryList_A();
                    $scope.addCategoryContainer_A = false;
                    $scope.category_A.category_name = '';
                    $scope.category_A.category_status = '';
                }
            });
        };
        $scope.updateCategory_A = function (category_A) {
            var category_id = category_A.category_id;
            var category_name = category_A.category_name;
            var status = category_A.status;
            appProxy.updateCategory_A(category_id, category_name, status).then(function () {
                $scope.catName_A = null;
                $scope.selectedCategoryName_A = null;
                $scope.catStatus_A = null;
                $scope.selectedCategoryStatus_A = null;
                $scope.editBtn_A = null;
                $scope.saveBtn_A = null;
                $scope.cancelBtn_A = null;
            });
        };

        //***********************************************************************************
        if ($scope.admin_role_id == 1) {
            $scope.addCategoryContainer = false;
            $scope.locationDropdownList();
        } else {
            $scope.addCategoryContainer_A = false;
            $scope.categoryList_A();
        }
        
    }]);
}());