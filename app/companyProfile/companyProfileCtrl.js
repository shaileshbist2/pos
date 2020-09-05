(function () {
    angular.module('mainApp').controller('companyProfileCtrl', ['$cookieStore', '$scope', 'authFact', '$location', 'appProxy', function ($cookieStore, $scope, authFact, $location, appProxy) {
        if (!authFact.isAuthorized()) $location.path('/login');


        $scope.getAddressInfo = function () {
            appProxy.getAddressInfo().then(function (response) {
                $scope.company_address = response.data[0].company_address;
            });
        };
        $scope.editCompanyAddressBtn = function () {
            $scope.companyAddressShow = true;
            $scope.companyAddressHide = true;
            $scope.address_inputOpt = true;
            $scope.address_saveOpt = true;
            $scope.address_cancelOpt = true;
        };
        $scope.cancelAddressInfo = function () {
            $scope.address_inputOpt = false;
            $scope.address_saveOpt = false;
            $scope.address_cancelOpt = false;
            $scope.companyAddressShow = false;
            $scope.companyAddressHide = false;
        };
        $scope.updateAddressInfo = function () {
            var company_address = $scope.company_address;
            appProxy.updateAddressInfo(company_address).then(function (response) {
                if (response.message == 'success') {
                    $scope.address_inputOpt = false;
                    $scope.address_saveOpt = false;
                    $scope.address_cancelOpt = false;
                    $scope.companyAddressShow = false;
                    $scope.companyAddressHide = false;
                } else {
                    $scope.address_inputOpt = false;
                    $scope.address_saveOpt = false;
                    $scope.address_cancelOpt = false;
                    $scope.companyAddressShow = false;
                    $scope.companyAddressHide = false;
                }
            });
        };

        $scope.get_company_info = function () {
            appProxy.get_company_info().then(function (response) {
                $scope.company_name = response.data[0].company_name;
                $scope.company_vat = response.data[0].company_vat;
                $scope.company_nick_name = response.data[0].company_nick_name;
                $scope.company_cin = response.data[0].company_cin;
                $scope.company_tin_cst = response.data[0].company_tin_cst;
                $scope.company_stn = response.data[0].company_stn;
            });
        };
        $scope.get_company_info();

        $scope.edit_company_name = function () {
            $scope.company_name_view = true;
            $scope.update_company_name = true;
        };
        $scope.cancel_company_name = function () {
            $scope.company_name_view = false;
            $scope.update_company_name = false;
        };
        $scope.updateCompanyName = function () {
            var company_name = $scope.company_name;
            appProxy.updateCompanyName(company_name).then(function (response) {
                if (response.message == 'success') {
                    $scope.company_name_view = false;
                    $scope.update_company_name = false;
                    sessionStorage.removeItem('profileValue');
                    $scope.validDetailCheck();
                } else {
                    $scope.company_name_view = false;
                    $scope.update_company_name = false;
                }
            });
        };

        $scope.edit_company_nick_name = function () {
            $scope.company_nick_name_view = true;
            $scope.update_company_nick_name = true;
        };
        $scope.cancel_company_nick_name = function () {
            $scope.company_nick_name_view = false;
            $scope.update_company_nick_name = false;
        };
        $scope.updateCompanyNickName = function () {
            var company_nick_name = $scope.company_nick_name;
            appProxy.updateCompanyNickName(company_nick_name).then(function (response) {
                if (response.message == 'success') {
                    $scope.company_nick_name_view = false;
                    $scope.update_company_nick_name = false;
                } else {
                    $scope.company_nick_name_view = false;
                    $scope.update_company_nick_name = false;
                }
            });
        };
        $scope.edit_CIN = function () {
            $scope.CIN_view = true;
            $scope.update_CIN = true;
        };
        $scope.cancel_cin = function () {
            $scope.CIN_view = false;
            $scope.update_CIN = false;
        };
        $scope.updateCIN = function () {
            var company_cin = $scope.company_cin;
            appProxy.updateCIN(company_cin).then(function (response) {
                if (response.message == 'success') {
                    $scope.CIN_view = false;
                    $scope.update_CIN = false;
                } else {
                    $scope.CIN_view = false;
                    $scope.update_CIN = false;
                }
            });
        };
        $scope.edit_STN = function () {
            $scope.STN_view = true;
            $scope.update_STN = true;
        };
        $scope.cancel_STN = function () {
            $scope.STN_view = false;
            $scope.update_STN = false;
        };
        $scope.updateSTN = function () {
            var company_stn = $scope.company_stn;
            appProxy.updateSTN(company_stn).then(function (response) {
                if (response.message == 'success') {
                    $scope.STN_view = false;
                    $scope.update_STN = false;
                } else {
                    $scope.STN_view = false;
                    $scope.update_STN = false;
                }
            });
        };
        $scope.edit_TINCST = function () {
            $scope.TINCST_view = true;
            $scope.update_TINCST = true;
        };
        $scope.cancel_TINCST = function () {
            $scope.TINCST_view = false;
            $scope.update_TINCST = false;
        };
        $scope.updateTINCST = function () {
            var company_tin_cst = $scope.company_tin_cst;
            appProxy.updateTINCST(company_tin_cst).then(function (response) {
                if (response.message == 'success') {
                    $scope.TINCST_view = false;
                    $scope.update_TINCST = false;
                } else {
                    $scope.TINCST_view = false;
                    $scope.update_TINCST = false;
                }
            });
        };


        $scope.edit_TAXVAT = function () {
            $scope.TAXVAT_view = true;
            $scope.update_TAXVAT = true;
        };
        $scope.cancel_TAXVAT = function () {
            $scope.TAXVAT_view = false;
            $scope.update_TAXVAT = false;
        };
        $scope.updateTAXVAT = function () {
            var company_tax_vat = $scope.company_vat;
            appProxy.updateTAXVAT(company_tax_vat).then(function (response) {
                if (response.message == 'success') {
                    $scope.TAXVAT_view = false;
                    $scope.update_TAXVAT = false;
                } else {
                    $scope.TAXVAT_view = false;
                    $scope.update_TAXVAT = false;
                }
            });
        };


        if ($scope.admin_role_id == 1) {
            $scope.getAddressInfo();
        } else {
            $location.path('/dashboard');
        }


        //---------- IMAGE UPLOADING PROCESS ------------
        $scope.myImage = '';
        $scope.myCroppedImage = '';
        var handleFileSelect = function (evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function ($scope) {
                    $scope.myImage = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
            $scope.showUploadImagePreview = true;
            $scope.selectImage = true;
        };
        angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
        $scope.sourceClick = function () {
            alert($scope.myCroppedImage);
        };

        $scope.updateCompanyLogo = function () {
            $scope.pageLoader = true;
            var update_company_logo = $scope.myCroppedImage;
            appProxy.updateCompanyLogo(update_company_logo).then(function (response) {
                if (response.message == 'success') {
                    //$scope.company_logo;
                    $scope.validDetailCheck();
                    $scope.showUploadImagePreview = false;
                    $scope.selectImage = false;
                    $scope.pageLoader = false;
                } else {
                    $scope.pageLoader = false;
                    $scope.selectImage = false;
                    $scope.errorUploadLogo = 'Unable to upload image please try again later';
                }
            });
        };
        $scope.cancelCompanyLogo = function(){
            $scope.myCroppedImage = '';
            $scope.showUploadImagePreview = false;
            $scope.selectImage = false;
        };
    }]);
}());