(function () {

    angular.module('mainApp').factory('utilMethods', ['$mdToast', '$uibModal', function ($mdToast, $uibModal) {
        var utilMethods = {};

        utilMethods.emptyObjects = {};

        utilMethods.isUndefinedOrNull = function (obj) {
            return (angular.isUndefined(obj) || obj === null);
        };

        utilMethods.isBlank = function (str) {
            return (!str || 0 === str.length);
        };

        utilMethods.showInfoMessageBox = function (m, t) {
            return $uibModal.open({
                animation: true,
                templateUrl: 'app/modalwindow/infomodaltemplate.html',
                controller: 'infoModalWindowCtrl',
                resolve: {
                    modalInfo: function () {
                        return {messageText: m, titleText: utilMethods.isUndefinedOrNull(t) ? "Information.." : t};
                    }
                }
            });
        };

        utilMethods.showErrorMessageBox = function (m, t) {
            return $uibModal.open({
                animation: true,
                templateUrl: 'app/modalwindow/errormodaltemplate.html',
                controller: 'errorModalWindowCtrl',
                resolve: {
                    modalInfo: function () {
                        return {messageText: m, titleText: utilMethods.isUndefinedOrNull(t) ? "Error.." : t};
                    }
                }
            });
        };

        utilMethods.showConfirmationBox = function (m, t) {
            return $uibModal.open({
                animation: true,
                templateUrl: 'app/modalwindow/confirmationtemplate.html',
                controller: 'confirmationWindowCtrl',
                resolve: {
                    modalInfo: function () {
                        return {messageText: m, titleText: utilMethods.isUndefinedOrNull(t) ? "Confirm?" : t};
                    }
                }
            });

            /*
             modalInstance.result.then(function (action) {
             $scope.selected = selectedItem;
             }, function () {
             $log.info('Modal dismissed at: ' + new Date());
             });
             */
        };

        utilMethods.showAllotmentConfirmationBox = function (m, t) {
            return $uibModal.open({
                animation: true,
                templateUrl: 'app/modalwindow/allotmentConfermationTemplate.html',
                controller: 'confirmationWindowCtrl',
                resolve: {
                    modalInfo: function () {
                        return {messageText: m, titleText: utilMethods.isUndefinedOrNull(t) ? "Confirm?" : t};
                    }
                }
            });
        };

        return utilMethods;

    }]);

    angular.module('mainApp').factory('apiService', ['$http', '$q', function ($http, $q) {
        var apiService = {};
        apiService.executeGetMethod = function (method) {
            var deferred = $q.defer();
            $http.get(method).success(function (data) {
                deferred.resolve(data);
            }).error(function (msg) {
                deferred.reject(msg);
            });
            return deferred.promise;
        }

        apiService.executePostMethod = function (method, params, header) {
            var deferred = $q.defer();
            $http.post(method, params, header).success(function (data) {
                deferred.resolve(data);
            }).error(function (msg, status) {
                deferred.reject(msg);
            });
            return deferred.promise;
        }

        return apiService;
    }]);


    angular.module('mainApp').factory('authFact', ['$cookieStore', '$rootScope', 'appProxy', '$q', function ($cookieStore, $rootScope, appProxy, $q) {
        var authFact = {};

        //------ Session Storage While Login ------------
        authFact.setUserData = function (key, value) {
            sessionStorage.setItem(key, value);
        };
        authFact.getUserData = function () {
            var authResponse = sessionStorage.getItem('userData');
            return authResponse;
        };

        authFact.setUserRole = function (key, value) {
            sessionStorage.setItem(key, value);
        };
        authFact.getUserRole = function (key) {
            var authResponse = sessionStorage.getItem(key);
            return authResponse;
        };
        authFact.isAuthorized = function () {
            return authFact.getUserData();
        };
        
        //---------- Profile Value Set --------------------
        authFact.getProfileValue = function(){
            var authResponse = sessionStorage.getItem('profileValue');
            return authResponse;
        };
        authFact.setProfileValue = function(key, value){
            sessionStorage.setItem(key, value);
        };
        authFact.isAuthorizedProfileValue = function () {
            return authFact.getProfileValue();
        };

        //--------- Logout Permission ---------------
        authFact.logout = function () {
            sessionStorage.clear('userData');
        };

        authFact.branchLogin = function (branch_email, branch_password) {
            var deferred = $q.defer();
            appProxy.branchLogin(branch_email, branch_password).then(function (response) {
                if (response.data[0].error_msg == 'error_false') {
                    var response_token = response.data[0].branch_token;
                    var userRole = response.data[0].admin_role_id;
                    authFact.setUserData('userData', response_token);
                    authFact.setUserRole("userRole", userRole);
                    deferred.resolve(response);
                } else {
                    deferred.resolve(response);
                }
            }, function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        };


        authFact.sign_up = function (first_name, last_name, email, mobile_number, password, re_password) {
            var deferred = $q.defer();
            appProxy.sign_up(first_name, last_name, email, mobile_number, password, re_password).then(function (response) {
                var error_msg = response.data[0].error_msg;
                if (error_msg == 'password_match_error') {
                    deferred.resolve(response);
                } else if (error_msg == 'email_exist') {
                    deferred.resolve(response);
                } else if (error_msg == 'mobile_number_exist') {
                    deferred.resolve(response);
                } else {
                    var response_token = response.data[0].branch_token;
                    authFact.setUserData('userData', response_token);
                    authFact.setUserRole('userRole', 1);
                    authFact.setProfileValue('profileValue', 0);
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        };

        return authFact;
    }]);


    angular.module('mainApp').factory('interceptorAuth', ['$cookieStore', function ($cookieStore) {
        var apiKeyInjector = {
            request: function (config) {
                if (config.url.indexOf('.html') < 0) {
                    config.headers = config.headers || {};
                    if (!config.params) {
                        config.params = {};
                    }
                    if (sessionStorage.getItem('userData') != null) {
                        config.headers.Authorization = sessionStorage.getItem('userData');
                    } else {
                        console.log('branch token not found');
                    }
                }
                return config;
            }
        };
        return apiKeyInjector;
    }]).config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('interceptorAuth');
    }]);
}());