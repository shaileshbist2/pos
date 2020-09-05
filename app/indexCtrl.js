(function () {
    angular.module('mainApp').controller('indexCtrl', ['$scope', '$location', 'authFact', '$rootScope', '$q', 'appProxy', function ($scope, $location, authFact, $rootScope, $q, appProxy) {

        $scope.admin_role_id = '';

        $scope.setAdminUserRole = function () {
            $scope.admin_role_id = authFact.getUserRole('userRole');
        };
        $scope.setAdminUserRole();

        $scope.webPath = websitePathUrl;

        $scope.isAuthorized = function () {
            return authFact.isAuthorized();
        };
        $scope.isAuthorizedProfileValue = function () {
            return authFact.isAuthorizedProfileValue();
        };

        $scope.logout = function () {
            authFact.logout();
        };


//---------- SET COMPANY DETAILS ON HEADER FOOTER AND BODY -----------
        $scope.validDetailCheck = function () {
            $scope.isAuthorizedProfileValue();
            appProxy.setDetails().then(function (response) {
                $scope.first_name = response.data[0].first_name;
                $scope.branch_email = response.data[0].branch_email;
                $scope.company_logo = response.data[0].company_logo;
                $scope.setAdminUserRole();
            }, function errorCallback(response) {
            });
        };

        if ($scope.isAuthorized()) {
            $scope.validDetailCheck();
        }
    }])
}());