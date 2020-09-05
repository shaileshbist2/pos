/**
 * Created by shailesh bist on 8/6/2016.
 */

(function () {
    angular.module('mainApp').controller('manageUsersCtrl', ['$cookieStore', '$scope', 'authFact', '$location', 'appProxy', function ($cookieStore, $scope, authFact, $location, appProxy) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');


        //------ SUPER ADMIN ----------------------
        $scope.add_user_SA = function () {
            $scope.updateUserContainer_SA = false;
            /*$scope.addUserContainer_SA = !$scope.addUserContainer_SA;*/
            $scope.animate = !$scope.animate;
        };
        $scope.getLocationList_manageUsers_SA = function () {
            $scope.pageLoader = true;
            $scope.mU_lL_SA = [];
            appProxy.getLocationList_manageUsers_SA().then(function (response) {
                $scope.mU_lL_SA = response.data[0].locationList;
                $scope.pageLoader = false;
            });
        };
        $scope.getUserList_manageUsers_SA = function () {
            $scope.pageLoader = true;
            $scope.uL_SA = [];
            var branch_id = $scope.locationList_SA.branch_id;
            appProxy.getUserList_manageUsers_SA(branch_id).then(function (response) {
                $scope.uL_SA = response.data[0].userList;
                $scope.pageLoader = false;
            });
        };
        $scope.addNewUser_SA = function () {
            var branch_id = $scope.locationList_SA.branch_id;
            var first_name = $scope.user.first_name;
            var last_name = $scope.user.last_name;
            var email_id = $scope.user.email_id;
            var password = $scope.user.password;
            var mobile_number = $scope.user.mobile_number;
            var status = $scope.user.status;
            appProxy.addNewUser_SA(branch_id, first_name, last_name, email_id, password, mobile_number, status).then(function (response) {
                if (response.message == 'success') {
                    $scope.user.first_name = null;
                    $scope.user.last_name = null;
                    $scope.user.email_id = null;
                    $scope.addUserForm.email_id.$invalid = false;
                    $scope.addUserForm.email_id.$touched = false;
                    $scope.user.password = null;
                    $scope.user.mobile_number = null;
                    $scope.getUserList_manageUsers_SA();
                    $scope.addUserContainer_SA = false;
                } else if (response.message == 'failed') {
                    $scope.addUserFailedError = 'Try Again / There is some problem please contact your software provide';
                } else if (response.message == 'email_exist') {
                    $scope.addUserEmailExistError_SA = true;
                }
            });
        };
        $scope.editUser_SA = function (user_id) {
            $scope.update_password = null;
            $scope.userList = false;
            $scope.updateUserContainer_SA = true;
            $scope.addUserContainer_SA = false;
            $scope.addUserOpt_SA = false;
            $scope.pageLoader = true;
            appProxy.getUserInfo_SA(user_id).then(function (response) {
                if (response.message == 'success') {
                    var data = response.data[0];
                    $scope.user_id = data.user_id;
                    $scope.update_first_name = data.user_first_name;
                    $scope.update_last_name = data.user_last_name;
                    $scope.update_email_id = data.user_email;
                    $scope.update_mobile_number = data.user_phone;
                    $scope.update_status = data.status;
                    $scope.pageLoader = false;
                } else if (response.message == 'failed') {
                    $scope.updateUserFailedError = 'Try Again / contact your software provider';
                }
            });
        };
        $scope.updateUser_SA = function () {
            var user_id = $scope.user_id;
            var first_name = $scope.update_first_name;
            var last_name = $scope.update_last_name;
            var email_id = $scope.update_email_id;
            var password = $scope.update_password;
            var mobile_number = $scope.update_mobile_number;
            var status = $scope.update_status;
            appProxy.updateUser_SA(user_id, first_name, last_name, email_id, password, mobile_number, status).then(function (response) {
                if (response.message == 'success') {
                    $scope.updateUserContainer_SA = false;
                    $scope.update_first_name = null;
                    $scope.update_last_name = null;
                    $scope.update_email_id = null;
                    $scope.update_password = null;
                    $scope.update_mobile_number = null;
                    $scope.update_status = null;
                    $scope.updateUserContainer_SA = false;
                    $scope.addUserContainer_SA = false;
                    $scope.addUserOpt_SA = true;
                    $scope.userList = true;
                    $scope.getUserList_manageUsers_SA();
                } else if (response.message == 'failed') {

                } else if (response.message == 'email_exist') {
                    $scope.updateUserEmailExistError_SA = true;
                }
            });
        };
        $scope.backBtn_SA = function () {
            $scope.userList = true;
            $scope.addUserOpt_SA = true;
            $scope.updateUserContainer_SA = false;
            $scope.addUserContainer_SA = false;

        };


        //----------- ADMIN ------------------
        $scope.add_user_A = function () {
            $scope.updateUserContainer_A = false;
            /*$scope.addUserContainer_A = !$scope.addUserContainer_A;*/
            $scope.animate = !$scope.animate;
        };
        $scope.getUserList_manageUsers_A = function () {
            $scope.pageLoader = true;
            $scope.uL_A = [];
            appProxy.getUserList_manageUsers_A().then(function (response) {
                $scope.uL_A = response.data[0].userList;
                $scope.pageLoader = false;
            });
        };
        $scope.addNewUser_A = function () {
            var first_name = $scope.user.first_name_A;
            var last_name = $scope.user.last_name_A;
            var email_id = $scope.user.email_id_A;
            var password = $scope.user.password_A;
            var mobile_number = $scope.user.mobile_number_A;
            var status = $scope.user.status_A;
            appProxy.addNewUser_A(first_name, last_name, email_id, password, mobile_number, status).then(function (response) {
                if (response.message == 'success') {
                    $scope.user.first_name_A = null;
                    $scope.user.last_name_A = null;
                    $scope.user.email_id_A = null;
                    $scope.user.password_A = null;
                    $scope.user.mobile_number_A = null;
                    $scope.user.status_A = null;
                    $scope.getUserList_manageUsers_A();
                } else if (response.message == 'failed') {
                    $scope.addUserFailedError_A = 'Try Again / There is some problem please contact your software provide';
                } else if (response.message == 'email_exist') {
                    $scope.addUserEmailExistError_A = true;
                }
            });
        };


        $scope.editUser_A = function (user_id) {
            $scope.update_password_A = null;
            $scope.userList_A = false;
            $scope.addUserOpt_A = false;
            $scope.updateUserContainer_A = true;
            $scope.addUserContainer_A = false;
            $scope.pageLoader = true;
            appProxy.getUserInfo_A(user_id).then(function (response) {
                if (response.message == 'success') {
                    var data = response.data[0];
                    $scope.user_id = data.user_id;
                    $scope.update_first_name_A = data.user_first_name;
                    $scope.update_last_name_A = data.user_last_name;
                    $scope.update_email_id_A = data.user_email;
                    $scope.update_mobile_number_A = data.user_phone;
                    $scope.update_status_A = data.status;
                    $scope.pageLoader = false;
                } else if (response.message == 'failed') {
                    $scope.updateUserFailedError = 'Try Again / contact your software provider';
                }
            });
        };
        $scope.updateUser_A = function () {
            var user_id = $scope.user_id;
            var first_name = $scope.update_first_name_A;
            var last_name = $scope.update_last_name_A;
            var email_id = $scope.update_email_id_A;
            var password = $scope.update_password_A;
            var mobile_number = $scope.update_mobile_number_A;
            var status = $scope.update_status_A;
            appProxy.updateUser_A(user_id, first_name, last_name, email_id, password, mobile_number, status).then(function (response) {
                if (response.message == 'success') {
                    $scope.updateUserContainer_A = false;
                    $scope.update_first_name_A = null;
                    $scope.update_last_name_A = null;
                    $scope.update_email_id_A = null;
                    $scope.update_password_A = null;
                    $scope.update_mobile_number_A = null;
                    $scope.update_status_A = null;
                    $scope.updateUserContainer_A = false;
                    $scope.addUserOpt_A = true;
                    $scope.userList_A = true;
                    $scope.getUserList_manageUsers_A();
                } else if (response.message == 'failed') {

                } else if (response.message == 'email_exist') {
                    $scope.updateUserEmailExistError_A = true;
                }
            });
        };
        $scope.backBtn_A = function () {
            $scope.userList_A = true;
            $scope.updateUserContainer_A = false;
            $scope.addUserOpt_A = true;
        };

        if ($scope.admin_role_id == 1) {
            $scope.userList = true;
            $scope.addUserOpt_SA = true;
            $scope.getLocationList_manageUsers_SA();
        } else {
            $scope.addUserOpt_A = true;
            $scope.userList_A = true;
            $scope.getUserList_manageUsers_A();
        }

        
    }]);
}());
