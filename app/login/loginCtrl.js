(function () {
    angular.module('mainApp').controller('loginCtrl', ['$scope', '$http', 'authFact', '$location', 'appProxy', function ($scope, $http, authFact, $location, appProxy) {
        if (authFact.isAuthorized()) $location.path('/dashboard');

        $scope.webPath = websitePathUrl;
        $scope.user = {
            email: '',
            password: ''
        };

        $scope.branchLogin = function () {
            if ($scope.user.email == '' && $scope.user.password == '') {
                console.log('email and password are not found');
            } else {
                $scope.loginSpinner = true;
                authFact.branchLogin($scope.user.email, $scope.user.password).then(function (response) {
                    if (response.data[0].error_msg == 'error_true') {
                        var branch_token = response.data[0].branch_token;
                        authFact.setUserData('userData', branch_token);
                        authFact.setUserRole('userRole', '1');
                        authFact.setProfileValue('profileValue', 0);
                        $scope.validDetailCheck();
                        $location.path('/company_profile');
                        $scope.loginSpinner = false;
                    } else if (response.data[0].error_msg == 'login_error') {
                        $scope.loginFailedMessage = 'Incorrect email id / password';
                        $scope.loginSpinner = false;
                    } else if(response.data[0].loc_error_msg == 'location_null'){
                        $scope.validDetailCheck();
                        //authFact.setProfileValue('profileValue', 1);
                        $location.path('/manage_location');
                    }else {
                        $scope.validDetailCheck();
                        //authFact.setProfileValue('profileValue', 1);
                        $location.path('/dashboard');
                        $scope.loginSpinner = false;
                    }
                });
            }
        };


        /*$scope.checkLocationExist_SA = function(){
            alert();
        };
        $scope.checkLocationExist_SA();*/
    }])
}());