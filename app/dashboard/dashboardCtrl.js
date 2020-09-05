(function () {
    angular.module('mainApp').controller('dashboardCtrl', ['$cookieStore', '$scope', 'authFact', '$location', 'appProxy', function ($cookieStore, $scope, authFact, $location, appProxy) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');

        $scope.admin_role_id = authFact.getUserRole('userRole');

        //-------- SA DASHBOARD ----------------
        $scope.getTotalOrdersAndPrice_SA = function () {
            $('.enableLoader').addClass('loading_wait');
            $scope.orderPriceData = [];
            appProxy.getTotalOrdersAndPrice_SA().then(function (response) {
                $scope.orderPriceData = response.data[0];
                if ($scope.orderPriceData.final_price == null) {
                    $scope.orderPriceData.final_price = 0;
                }
                $('.enableLoader').removeClass('loading_wait');
            });
        };

        $scope.refresh_orders_SA = function () {
            $scope.getTotalOrdersAndPrice_SA();
        };
        $scope.branchLocationList = function () {
            $scope.bLL = [];
            appProxy.branchLocationList().then(function (response) {
                $scope.bLL = response.data[0].locationList;
            });
        };

        $scope.locationOrderInfo = function (branch_id) {
            $location.path('/manage_orders/' + branch_id);
        };


        //-------- A DASHBOARD ---------------
        $scope.getTotalOrdersAndPrice_A = function () {
            $scope.orderPriceData_A = [];
            appProxy.getTotalOrdersAndPrice_A().then(function (response) {
                $scope.orderPriceData_A = response.data[0];
                if ($scope.orderPriceData_A.final_price == null) {
                    $scope.orderPriceData_A.final_price = 0;
                }
            });
        };
        $scope.refresh_orders_A = function () {
            $scope.getTotalOrdersAndPrice_A();
        };


        if ($scope.admin_role_id == 1) {
            $scope.getTotalOrdersAndPrice_SA();
            $scope.branchLocationList();
        } else {
            $scope.getTotalOrdersAndPrice_A();
        }


    }]);
}());