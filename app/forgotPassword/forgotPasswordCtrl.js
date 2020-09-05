(function () {
    angular.module('mainApp').controller('forgotPasswordCtrl', ['$scope', '$http', 'authFact', '$location', 'appProxy', function ($scope, $http, authFact, $location, appProxy) {

        if (authFact.isAuthorized()) $location.path('/dashboard');
        $scope.webPath = websitePathUrl;

        $scope.sendResetPasswordLink = function(){
            var company_email = $scope.user.email;
            if(company_email == ''){
                $scope.errorMessage = 'Please enter valid email id';
            }else{
                appProxy.sendResetPasswordLink(company_email).then(function(response){
                    if(response.message == 'success'){
                        $scope.successMessage = 'Please check your email id, we have sent you a password reset link';
                        $scope.errorMessage = '';
                    }else{
                        $scope.successMessage = '';
                        $scope.errorMessage = 'email id not found / wrong email id';
                    }
                });
            }
        }
    }]);
}());