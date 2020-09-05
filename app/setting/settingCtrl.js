/**
 * Created by shailesh bist on 10/19/2016.
 */
(function () {
    angular.module('mainApp').controller('settingCtrl', ['$cookieStore', '$scope', 'authFact', '$location', 'appProxy', function ($cookieStore, $scope, authFact, $location, appProxy) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');


        $scope.updateVisibilityOpt1 = function (switch1) {
            if (switch1 == 0) {
                var optFlag1 = 1;
            }
            if (switch1 == 1) {
                var optFlag1 = 0
            }
            appProxy.updateVisibilityOpt1(optFlag1).then(function (response) {
                if (response.message == 'success') {
                    $scope.setOpt1();
                }
            });
        };
        $scope.setOpt1 = function () {
            appProxy.setOpt1().then(function (response) {
                var bill_option_flag = response.data[0].bill_option_flag;
                if (bill_option_flag == 1) {
                    var optValue = true;
                } else if (bill_option_flag == 0) {
                    var optValue = false;
                }
                $scope.data = {
                    switch1: optValue
                };
            });
        };

        $scope.updateVisibilityOpt2 = function (switch2) {
            if (switch2 == 0) {
                var optFlag2 = 1;
            }
            if (switch2 == 1) {
                var optFlag2 = 0
            }
            appProxy.updateVisibilityOpt2(optFlag2).then(function (response) {
                if (response.message == 'success') {
                    $scope.setOpt2();
                }
            });
        };
        $scope.setOpt2 = function () {
            appProxy.setOpt2().then(function (response) {
                var promotional_offer_flag = response.data[0].promotional_offer_flag;
                if (promotional_offer_flag == 1) {
                    var optValue2 = true;
                } else if (promotional_offer_flag == 0) {
                    var optValue2 = false;
                }
                $scope.data2 = {
                    switch2: optValue2
                };
            });
        };

        $scope.updateVisibilityOpt3 = function (switch3) {
            if (switch3 == 0) {
                var optFlag3 = 1;
            }
            if (switch3 == 1) {
                var optFlag3 = 0
            }
            appProxy.updateVisibilityOpt3(optFlag3).then(function (response) {
                if (response.message == 'success') {
                    $scope.setOpt3();
                }
            });
        };
        $scope.setOpt3 = function () {
            appProxy.setOpt3().then(function (response) {
                var user_visibility_flag = response.data[0].user_visibility_flag;
                if (user_visibility_flag == 1) {
                    var optValue3 = true;
                } else if (user_visibility_flag == 0) {
                    var optValue3 = false;
                }
                $scope.data3 = {
                    switch3: optValue3
                };
            });
        };

        $scope.updateVisibilityOpt4 = function (switch4) {
            if (switch4 == 0) {
                var optFlag4 = 1;
            }
            if (switch4 == 1) {
                var optFlag4 = 0
            }
            appProxy.updateVisibilityOpt4(optFlag4).then(function (response) {
                if (response.message == 'success') {
                    $scope.setOpt4();
                }
            });
        };
        $scope.setOpt4 = function () {
            appProxy.setOpt4().then(function (response) {
                var branch_address_visibility_flag = response.data[0].branch_address_visibility_flag;
                if (branch_address_visibility_flag == 1) {
                    var optValue4 = true;
                } else if (branch_address_visibility_flag == 0) {
                    var optValue4 = false;
                }
                $scope.data4 = {
                    switch4: optValue4
                };
            });
        };

        $scope.updateVisibilityOpt5 = function (switch5) {
            if (switch5 == 0) {
                var optFlag5 = 1;
            }
            if (switch5 == 1) {
                var optFlag5 = 0
            }
            appProxy.updateVisibilityOpt5(optFlag5).then(function (response) {
                if (response.message == 'success') {
                    $scope.setOpt5();
                }
            });
        };
        $scope.setOpt5 = function () {
            appProxy.setOpt5().then(function (response) {
                var company_address_visibility_flag = response.data[0].company_address_visibility_flag;
                if (company_address_visibility_flag == 1) {
                    var optValue5 = true;
                } else if (company_address_visibility_flag == 0) {
                    var optValue5 = false;
                }
                $scope.data5 = {
                    switch5: optValue5
                };
            });
        };

        if ($scope.admin_role_id == 1) {
            $scope.setOpt1();
            $scope.setOpt2();
            $scope.setOpt3();
            $scope.setOpt4();
            $scope.setOpt5();
        } else {
            $location.path('/dashboard');
        }
    }]);
}());