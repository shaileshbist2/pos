(function () {
    angular.module("mainApp", ['ngRoute', 'ngCookies', 'ImageCropper', 'datatables', 'ui.bootstrap', 'ngImgCrop', 'ngAnimate', 'ngMaterial']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'app/login/login.html',
                controller: 'loginCtrl'
            })
            .when('/forgot-password', {
                templateUrl: 'app/forgotPassword/forgotPassword.html',
                controller: 'forgotPasswordCtrl'
            })
            .when('/reset-password/:token', {
                templateUrl: 'app/forgotPassword/resetPassword.html',
                controller: 'resetPasswordCtrl'
            })
            .when('/register', {
                templateUrl: 'app/register/register.html',
                controller: 'registerCtrl'
            })
            .when('/add-details', {
                templateUrl: 'app/register/register_2.html',
                controller: 'register_2Ctrl'
            })
            .when('/dashboard', {
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'dashboardCtrl'
            })
            .when('/manage_categories', {
                templateUrl: 'app/manageCategories/manageCategories.html',
                controller: 'manageCategoriesCtrl'
            })
            .when('/manage_items', {
                templateUrl: 'app/manageItems/manageItems.html',
                controller: 'manageItemsCtrl'
            })
            .when('/manage_inventory', {
                templateUrl: 'app/manageInventory/manageInventory.html',
                controller: 'manageInventoryCtrl'
            })
            .when('/allot_inventory', {
                templateUrl: 'app/allotInventory/allotInventory.html',
                controller: 'allotInventoryCtrl'
            })
            .when('/allot_inventory/:branchId/:inventoryId', {
                templateUrl: 'app/allotInventory/allotInventory.html',
                controller: 'allotInventoryCtrl'
            })
            .when('/manage_location', {
                templateUrl: 'app/manageLocation/manageLocation.html',
                controller: 'manageLocationCtrl'
            })
            .when('/manage_users', {
                templateUrl: 'app/manageUsers/manageUsers.html',
                controller: 'manageUsersCtrl'
            })
            .when('/manage_vendor', {
                templateUrl: 'app/manageVendor/manageVendor.html',
                controller: 'manageVendorCtrl'
            })
            .when('/manage_offer', {
                templateUrl: 'app/manageOffer/manageOffer.html',
                controller: 'manageOfferCtrl'
            })
            .when('/company_profile', {
                templateUrl: 'app/companyProfile/companyProfile.html',
                controller: 'companyProfileCtrl'
            })
            .when('/setting', {
                templateUrl: 'app/setting/setting.html',
                controller: 'settingCtrl'
            })
            .when('/manage_orders', {
                templateUrl: 'app/manageOrders/manageOrders.html',
                controller: 'manageOrdersCtrl'
            })
            .when('/manage_orders/:branch_id', {
                templateUrl: 'app/manageOrders/manageOrders.html',
                controller: 'manageOrdersCtrl'
            })
            .when('/manage_orders/:branch_id/:order_id', {
                templateUrl: 'app/manageOrders/manageOrders.html',
                controller: 'manageOrdersCtrl'
            })
            .when('/inventory_category', {
                templateUrl: 'app/inventoryCategory/inventoryCategory.html',
                controller: 'inventoryCategoryCtrl'
            })
            .when('/inventory_item', {
                templateUrl: 'app/inventoryItem/inventoryItem.html',
                controller: 'inventoryItemCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
        $locationProvider.html5Mode(true);
    }]);
    /*.run(['$rootScope', '$location', 'authFact', function ($rootScope, $location, authFact) {
     /!*$rootScope.$on('$routeChangeStart', function (event, next, current) {
     if (next.$$route) {
     if (!authFact.getSessionStorageToken()) {
     $location.path('/login');
     }
     }
     })*!/
     }])*/
}());





