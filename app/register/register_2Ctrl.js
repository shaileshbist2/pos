/**
 * Created by shailesh bist on 7/27/2016.
 */
(function () {
    angular.module('mainApp').controller('register_2Ctrl', ['$scope', 'authFact', '$location', 'appProxy', function ($scope, authFact, $location, appProxy) {
        if (!authFact.isRegisterAuthorized()) $location.path('/register');

        $scope.cancelConf = 1;
        $scope.cancelConfBtn = function () {
            $scope.cancelConf = 0;
            $scope.confirmation = 1;
        };

        $scope.cancelConfirmation = function () {
            $scope.cancelConf = 1;
            $scope.confirmation = 0;
        };


        $scope.deleteRegisterData = function () {
            $scope.cancelRegistrationSpinner = true;
            appProxy.deleteRegisterData().then(function (response) {
                if (response.message == 'success') {
                    sessionStorage.clear('userRegisterData');
                    $location.path('/register');
                    $scope.cancelRegistrationSpinner = false;
                }
            });
        };

        //---------- IMAGE UPLOADING PROCESS -------------------
        $scope.myImage = '';
        $scope.myCroppedImage = '';
        var handleFileSelect = function (evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function ($scope) {
                    $scope.myImage = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
        $scope.sourceClick = function () {
            alert($scope.myCroppedImage);
        };

        $scope.addDetailSpinner = false;
        $scope.addRegisterDetails = function () {
            $scope.addDetailsForm.$invalid = true;
            $scope.addDetailSpinner = true;
            if ($('#fileInput').val() == '') {
                $scope.errorImageMsg = 1;
                $scope.addDetailSpinner = false;
                $scope.addDetailsForm.$invalid = false;
            } else {
                var companyName = $scope.user.companyName;
                var companyNickName = $scope.user.companyNickName;
                var companyTax = $scope.user.companyTax;
                var companyLogo = $scope.myCroppedImage;
                appProxy.addRegisterDetails(companyName, companyNickName, companyTax, companyLogo).then(function (response) {
                    if(response.message == 'success'){

                        if(response.data[0].loc_error_msg == 'location_not_null'){
                            $scope.addDetailSpinner = true;
                            $scope.addDetailsForm.$invalid = false;
                            sessionStorage.clear('userRegisterData');
                            var userRole = response.data[0].admin_role_id;
                            authFact.setSessionData("userRole", userRole);
                            authFact.setSessionStorage(response.data[0].branch_token);
                            $scope.validDetailCheck();
                            authFact.setSessionStorage(response.data[0].branch_token);
                            $location.path('/dashboard');
                        }else{
                            $scope.addDetailSpinner = true;
                            $scope.addDetailsForm.$invalid = false;
                            sessionStorage.clear('userRegisterData');
                            var userRole = response.data[0].admin_role_id;
                            authFact.setSessionData("userRole", userRole);
                            authFact.setSessionStorage(response.data[0].branch_token);
                            $scope.validDetailCheck();
                            authFact.setSessionStorage(response.data[0].branch_token);
                            $location.path('/manage_location');
                        }
                    }
                });
            }
        };
    }]);
}());
