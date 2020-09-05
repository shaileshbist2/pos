(function () {
    angular.module('mainApp').controller('resetPasswordCtrl', ['$scope', '$http', 'authFact', '$location', 'appProxy', '$routeParams', function ($scope, $http, authFact, $location, appProxy, $routeParams) {

        if (authFact.isAuthorized()) $location.path('/dashboard');
        $scope.webPath = websitePathUrl;

        $scope.resetPassword = function () {
            var company_token = $routeParams.token;
            var new_password = $scope.user.newPassword;
            var reEnterNewPassword = $scope.user.reEnterNewPassword;
            if (new_password != reEnterNewPassword) {
                $scope.errorMessage = 'Password does not match';
            } else {
                appProxy.resetPassword(company_token, new_password).then(function(response){
                    if(response.message == 'success'){
                        $scope.errorMessage = '';
                        $location.path('/login');
                    }else{
                        $location.path('/forgot-password');
                    }
                });
            }
        }
    }]);
}());