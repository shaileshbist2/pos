(function () {
    angular.module('mainApp').controller('registerCtrl', ['$scope', '$http', '$location', 'authFact', function ($scope, $http, $location, authFact) {
        if (authFact.isAuthorized()) $location.path('/dashboard');

        $scope.sign_up = function () {
            $scope.registerForm.$invalid = true;
            $scope.registerLoader = true;
            var first_name = $scope.user.first_name;
            var last_name = $scope.user.last_name;
            var email = $scope.user.email;
            var mobile_number = $scope.user.mobile_number;
            var password = $scope.user.password;
            var re_password = $scope.user.re_password;
            if (first_name.trim() == '' && last_name.trim() == '' && email.trim() == '' && mobile_number.trim() == '' && password.trim() == '' && password.trim() == '' && re_password.trim() == '') {
                console.log('credentials are not found');
            } else {
                authFact.sign_up(first_name, last_name, email, mobile_number, password, re_password).then(function (response) {
                    if (response.data[0].error_msg == 'email_exist') {
                        $scope.errorMobileSignupMsg = false;
                        $scope.errorPasswordSignupMsg = false;
                        $scope.errorEmailSignupMsg = true;
                        $scope.registerForm.$invalid = false;
                        $scope.registerLoader = false;
                    } else if (response.data[0].error_msg == 'mobile_number_exist') {
                        $scope.errorEmailSignupMsg = false;
                        $scope.errorPasswordSignupMsg = false;
                        $scope.errorMobileSignupMsg = true;
                        $scope.registerForm.$invalid = false;
                        $scope.registerLoader = false;
                    } else if (response.data[0].error_msg == 'password_match_error') {
                        $scope.errorMobileSignupMsg = false;
                        $scope.errorEmailSignupMsg = false;
                        $scope.errorPasswordSignupMsg = true;
                        $scope.registerForm.$invalid = false;
                        $scope.registerLoader = false;
                    } else if (response.data[0].error_msg == 'register_success') {
                        $scope.isAuthorizedProfileValue();
                        $scope.setAdminUserRole();
                        $location.path('/company_profile');
                    }
                });
            }
        };
    }]);
}());