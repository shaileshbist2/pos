/**
 * Created by shailesh bist on 8/6/2016.
 */

(function () {
    angular.module('mainApp').controller('manageVendorCtrl', ['$cookieStore', '$scope', 'authFact', '$location', 'appProxy', function ($cookieStore, $scope, authFact, $location, appProxy) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');

        $scope.editVendor = {};
        //------ SUPER ADMIN ----------------------
        $scope.add_vendor_SA = function () {
            //$scope.updateVendorContainer_SA = false;
            /*$scope.addVendorContainer_SA = !$scope.addVendorContainer_SA;*/
            $scope.animate = !$scope.animate;
        };
        $scope.getVendorList_SA = function () {
            $scope.pageLoader = true;
            $scope.vL_SA = [];
            appProxy.getVendorList_SA().then(function (response) {
                $scope.vL_SA = response.data[0].vendorList;
                $scope.pageLoader = false;
            });
        };

        $scope.addNewVendor_SA = function () {
            var vendor_name = $scope.vendor.vendor_name;
            var full_name = $scope.vendor.full_name;
            var email_id = $scope.vendor.email_id;
            var mobile_number = $scope.vendor.mobile_number;
            var address = $scope.vendor.address;
            appProxy.addNewVendor_SA(vendor_name, full_name, email_id, mobile_number, address).then(function (response) {
                var errorMsg = response.data[0].errorMsg
                if (errorMsg == 'email_exist') {
                    $scope.addVendorEmailExistError_SA = true;
                    $scope.addVendorMobileExistError_SA = false;
                } else if (errorMsg == 'mobile_exist') {
                    $scope.addVendorMobileExistError_SA = true;
                    $scope.addVendorEmailExistError_SA = false;
                } else {
                    $scope.addVendorForm.email_id.$invalid = false;
                    $scope.addVendorForm.email_id.$touched = false;
                    $scope.vendor = null;
                    $scope.addVendorMobileExistError_SA = false;
                    $scope.addVendorEmailExistError_SA = false;
                    $scope.getVendorList_SA();
                    $scope.animate = !$scope.animate;
                }
            });
        };


        $scope.editVendor_SA = function (vendor) {
            $scope.editPanel_SA = true;
            $scope.editVendor = angular.copy(vendor);
        };

        $scope.updateVendor_SA = function () {
             appProxy.updateVendor_SA($scope.editVendor).then(function (response) {
                 $scope.getVendorList_SA();
                 $scope.editPanel_SA = false;
             });
        };


        if ($scope.admin_role_id == 1) {
            $scope.vendorList = true;
            $scope.addVendorOpt_SA = true;
            $scope.getVendorList_SA();
        }
    }]);
}());
