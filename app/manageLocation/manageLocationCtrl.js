(function () {
    angular.module('mainApp').controller('manageLocationCtrl', ['DTOptionsBuilder', 'DTColumnDefBuilder', '$cookieStore', '$scope', 'authFact', '$location', 'appProxy', function (DTOptionsBuilder, DTColumnDefBuilder, $cookieStore, $scope, authFact, $location, appProxy) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');


        if ($scope.admin_role_id == 1) {
            $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('order', [4, 'desc']);
            $scope.add_location = function () {
                $scope.animate = !$scope.animate;
            };
            $scope.listView = 1;
            $scope.addNewLocationBtn = 1;
            $scope.getLocationList = function () {
                $scope.pageLoader = true;
                $scope.locations = [];
                appProxy.getLocationList().then(function (response) {
                    $scope.locations = response.data[0].locationList;
                    $scope.pageLoader = false;
                });
            };
            $scope.getLocationList();
            $scope.addLocation = function () {
                var first_name = $scope.loc.first_name;
                var last_name = $scope.loc.last_name;
                var mobile_number = $scope.loc.mobile_number;
                var email_id = $scope.loc.email_id;
                var password = $scope.loc.password;
                var location_name = $scope.loc.location_name;
                var location_address = $scope.loc.location_address;

                if (password.length != 6) {
                    $scope.addNewPasswordError = true;
                } else {
                    $scope.pageLoader = true;
                    appProxy.addLocation(first_name,
                        last_name,
                        mobile_number,
                        email_id,
                        password,
                        location_name,
                        location_address).then(function (response) {

                        if (response.message == 'email_exist') {
                            $scope.emailErrorMsg = true;
                            $scope.pageLoader = false;
                        } else {
                            $scope.emailErrorMsg = false;
                            $scope.animate = false;
                            $scope.loc = null;

                            $scope.addLocationForm.first_name.$invalid = false;
                            $scope.addLocationForm.first_name.$touched = false;
                            $scope.addLocationForm.last_name.$invalid = false;
                            $scope.addLocationForm.last_name.$touched = false;
                            $scope.addLocationForm.mobile_number.$invalid = false;
                            $scope.addLocationForm.mobile_number.$touched = false;
                            $scope.addLocationForm.email_id.$invalid = false;
                            $scope.addLocationForm.email_id.$touched = false;
                            $scope.addLocationForm.password.$invalid = false;
                            $scope.addLocationForm.password.$touched = false;
                            $scope.emailErrorMsg = false;
                            $scope.locationErrorMsg = false;

                            $scope.getLocationList();
                            $scope.pageLoader = false;
                        }
                    });
                }
            };
            $scope.editLocation = function (location_id) {
                $scope.pageLoader = true;
                $scope.addNewLocationBtn = 0;
                $scope.listView = 0;
                $scope.addLocationContainer = false;
                $scope.editLocationContainer = true;
                $scope.update_password = '';
                appProxy.getLocationInfoForUpdate(location_id).then(function (response) {
                    var obj = response.data[0];
                    $scope.location_id = obj.location_id;
                    $scope.update_first_name = obj.first_name;
                    $scope.update_last_name = obj.last_name;
                    $scope.update_mobile_number = obj.mobile_number;
                    $scope.update_email_id = obj.branch_email;
                    $scope.update_location_name = obj.location_name;
                    $scope.update_status = obj.status;
                    $scope.update_address = obj.address;
                    $scope.pageLoader = false;
                });
            };

            $scope.updateLocation = function (location_id) {
                var first_name = $scope.update_first_name;
                var last_name = $scope.update_last_name;
                var mobile_number = $scope.update_mobile_number;
                var email_id = $scope.update_email_id;
                var password = $scope.update_password;
                var location_name = $scope.update_location_name;
                var address = $scope.update_address;
                var status = $scope.update_status;
                appProxy.updateLocation(location_id, first_name, last_name, mobile_number, email_id, password, location_name, address, status).then(function (response) {
                    $scope.editLocationContainer = false;
                    $scope.listView = 1;
                    $scope.addNewLocationBtn = 1;
                    $scope.getLocationList();
                });
            };
            $scope.back = function () {
                $scope.editLocationContainer = false;
                $scope.listView = 1;
                $scope.addNewLocationBtn = 1;
            };
        } else {
            $location.path('/dashboard');
        }

        
    }]);
}());
