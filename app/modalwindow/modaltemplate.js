(function () {
    angular.module('mainApp').controller('infoModalWindowCtrl', ['$scope', '$uibModalInstance', 'modalInfo', function ($scope, $uibModalInstance, modalInfo) {

        $scope.message = modalInfo.messageText;
        $scope.titleText = modalInfo.titleText;
        $scope.ok = function () {
            $uibModalInstance.close();
        };

    }]);

    angular.module('mainApp').controller('errorModalWindowCtrl', ['$scope', '$uibModalInstance', 'modalInfo', function ($scope, $uibModalInstance, modalInfo) {

        $scope.message = modalInfo.messageText;
        $scope.titleText = modalInfo.titleText;
        $scope.ok = function () {
            $uibModalInstance.close();
        };

    }]);

    angular.module('mainApp').controller('confirmationWindowCtrl', ['$scope', '$uibModalInstance', 'modalInfo', function ($scope, $uibModalInstance, modalInfo) {

        $scope.message = modalInfo.messageText;
        $scope.titleText = modalInfo.titleText;
        $scope.ok = function () {
            $uibModalInstance.close();
        };
        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        };

    }]);

    angular.module('mainApp').controller('inputModalWindowCtrl', ['$scope', '$uibModalInstance', 'modalInfo', function ($scope, $uibModalInstance, modalInfo) {
        $scope.inputValue = '';
        $scope.label = modalInfo.labelText;
        $scope.titleText = modalInfo.titleText;
        $scope.ok = function () {
            $uibModalInstance.close($scope.inputValue);
        };
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }]);
}());