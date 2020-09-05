/**
 * Created by shailesh bist on 10/3/2016.
 */

(function () {
    angular.module('mainApp').controller('manageOfferCtrl', ['$cookieStore', '$scope', 'authFact', '$location', 'appProxy', function ($cookieStore, $scope, authFact, $location, appProxy) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');

        $scope.add_offer_SA = function () {
            $scope.animate = !$scope.animate;
        };

        $scope.locationList_offer_SA = function () {
            $scope.pageLoader = true;
            $scope.olL = [];
            appProxy.locationList_offer_SA().then(function (response) {
                $scope.olL = response.data[0].locationList;
                $scope.pageLoader = false;
            });
        };
        $scope.locationList_offer_SA();


        $scope.updateOffer = function (branch_id, promotional_offer) {
            $scope.pageLoader = true;
            appProxy.updateOffer(branch_id, promotional_offer).then(function (response) {
                $scope.pO = null;
                $scope.saveBtn = null;
                $scope.cancelBtn = null;
                $scope.editBtn = null;
                $scope.pageLoader = false;
            });

        };


        $scope.editOffer_SA = function (branch_id) {
            $scope.pO = branch_id;
            $scope.saveBtn = branch_id;
            $scope.cancelBtn = branch_id;
            $scope.editBtn = branch_id;
        };

        $scope.cancelOffer_SA = function (branch_id) {
            $scope.pO = null;
            $scope.saveBtn = null;
            $scope.cancelBtn = null;
            $scope.editBtn = null;
            $scope.locationList_offer_SA();
        };

    }]);
}());
