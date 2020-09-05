/**
 * Created by shailesh bist on 8/6/2016.
 */

(function () {
    angular.module('mainApp').controller('manageOrdersCtrl', ['DTOptionsBuilder', 'DTColumnDefBuilder', '$cookieStore', '$scope', 'authFact', '$location', 'appProxy', '$routeParams', function (DTOptionsBuilder, DTColumnDefBuilder, $cookieStore, $scope, authFact, $location, appProxy, $routeParams) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');


        $scope.getOrderList_SA = function (branch_id, start_date, end_date) {
            $location.path('manage_orders/' + branch_id);
            $scope.totalOrderSaleLocationExist = true;
            $scope.dateRangeOptExist = true;
            $scope.pageLoader = true;
            $scope.orders = []; // array to show all items list in data table
            $scope.total_order_sale_SA = [];
            appProxy.getOrderList_SA(branch_id, start_date, end_date).then(function (response) {
                $scope.orders = response.data[0].order_list_SA;
                $scope.total_order_sale_SA = response.data[0].total_order_sale_SA;
                $scope.pageLoader = false;
            });
        };
        //------- Date Range Picker for SA ----------
        $('.selectCalender').daterangepicker({
            /*"startDate": "10/11/2016",
             "endDate": "10/17/2016",*/
            locale: {
                format: 'YYYY/MM/DD'
            }
        }, function (start, end) {
            var start_date = start.format('YYYY-MM-DD');
            var end_date = end.format('YYYY-MM-DD');
            var branch_id = $scope.locationList_SA.branch_id;
            $scope.getOrderList_SA(branch_id, start_date, end_date);
        });
        //------------------------------------------
        $scope.getItemList_SA = function (branch_id, order_id) {
            $location.path('manage_orders/' + branch_id + '/' + order_id);
            $scope.selectLocationOpt = false;
            $scope.pageLoader = true;
            $scope.items = [];
            appProxy.getItemOrderList_SA(order_id).then(function (response) {
                $scope.items = response.data[0].getItemList;
                $scope.screenMode = 1;
                $scope.pageLoader = false;
            });
        };
        $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('order', [5, 'desc']);
        $scope.getLocationList_ManageOrders_SA = function () {
            $scope.pageLoader = true;
            $scope.lL_SA = [];
            appProxy.getLocationList_ManageOrders_SA().then(function (response) {
                $scope.lL_SA = response.data[0].locationList;
                $scope.pageLoader = false;
            });
        };
        $scope.backToOrderList = function () {
            $location.path('manage_orders/' + $routeParams.branch_id);
            $scope.screenMode = 0;
            $scope.selectLocationOpt = true;
        };
        $scope.locationList_SA = {};


        //************* ADMIN PANEL *************************

        $scope.getOrderList_A = function () {
            $scope.pageLoader = true;
            $scope.orders_A = [];
            appProxy.getOrderList_A().then(function (response) {
                $scope.orders_A = response.data[0].data_info;
                $scope.pageLoader = false;
            });
        };
        $scope.getItemList_A = function (order_id) {
            $scope.pageLoader = true;
            $scope.items_A = [];
            appProxy.getItemOrderList_A(order_id).then(function (response) {
                $scope.items_A = response.data[0].item_list;
                $scope.screenMode_A = 1;
                $scope.pageLoader = false;
            });
        };
        $scope.backToOrderList_A = function () {
            $scope.screenMode_A = 0
        };


        if ($scope.admin_role_id == 1) {
            $scope.selectLocationOpt = true;
            $scope.screenMode = 0;
            $scope.getLocationList_ManageOrders_SA();
            if ($routeParams.branch_id == undefined && $routeParams.order_id == undefined) {

            } else if ($routeParams.branch_id != undefined && $routeParams.order_id == undefined) {
                $scope.getOrderList_SA($routeParams.branch_id);
                $scope.locationList_SA.branch_id = $routeParams.branch_id;
            } else if ($routeParams.branch_id != undefined && $routeParams.order_id != undefined) {
                $scope.getItemList_SA($routeParams.branch_id, $routeParams.order_id);
            }
        } else {
            $scope.screenMode_A = 0;
            $scope.getOrderList_A();
        }
    }]);
}());
