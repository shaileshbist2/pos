/**
 * Created by shailesh bist on 7/28/2016.
 */
(function () {
    angular.module('mainApp').controller('manageItemsCtrl', ['$cookieStore', '$scope', 'authFact', '$location', 'appProxy', '$uibModal', function ($cookieStore, $scope, authFact, $location, appProxy, $uibModal) {
        if (!authFact.isAuthorized()) $location.path('/login');
        if (authFact.isAuthorizedProfileValue()) $location.path('/company_profile');

        //******************** SUPER ADMIN PANEL **************************
        $scope.add_item_SA = function () {
            $scope.animate = !$scope.animate;
        };

        $scope.getLocationList_ManageItems_SA = function () {
            $scope.pageLoader = true;
            $scope.lL_SA = [];
            appProxy.getLocationList_ManageItems_SA().then(function (response) {
                $scope.lL_SA = response.data[0].locationList;
                $scope.pageLoader = false;
            });
        };
        $scope.getCategoryList_manageItems_SA = function () {
            $scope.pageLoader = true;
            $scope.cL_SA = [];
            var branch_id = $scope.locationList_SA.branch_id;
            appProxy.getCategoryList_manageItems_SA(branch_id).then(function (response) {
                $scope.cL_SA = response.data[0].categoryList;
                $scope.pageLoader = false;
            });
        };
        $scope.getItemList_manageItems_SA = function (category_id) {
            $scope.pageLoader = true;
            $scope.iL_SA = [];
            appProxy.getItemList_manageItems_SA(category_id).then(function (response) {
                $scope.iL_SA = response.data[0].itemList;
                $scope.pageLoader = false;
            });
        };


        //Add Inventory Dynamically
        $scope.choices = [];
        $scope.selectedChoice = [];
        $scope.addInventory = function () {
            var newItemNo = $scope.choices.length + 1;
            $scope.choices.push({});
        };
        $scope.removeInventory = function () {
            var lastItem = $scope.choices.length - 1;
            $scope.choices.splice(lastItem);
        };


        /*function checkDuplicate(idToFilter) {
         alert(idToFilter);
         var hasId = true;
         angular.foreach($scope.choices, function (l) {
         if (l.inventory === idToFilter)
         hasId = false;
         });
         return hasId;
         }*/

        $scope.itemRequired = true;
        $scope.hidePriceOpt_SA = function () {
            $scope.itemPrice_disabled = !$scope.itemPrice_disabled;
            if (!$scope.itemPrice_disabled) {
                $scope.item.item_price = null;
                $scope.itemPrice_dis = false;
                $scope.itemRequired = true;
            } else if ($scope.itemPrice_disabled) {
                $scope.item.item_price = 'MRP';
                $scope.itemRequired = false;
            }
        };
        $scope.addItems_SA = function () {
            var add_inventory = $scope.choices;
            var category_id = $scope.categoryList_SA.category_id;
            var item_name = $scope.item.item_name;
            var status = $scope.item.status;
            var mrpChecked = $scope.item.checked;

            if (mrpChecked == false || mrpChecked == undefined) {
                var item_price = $scope.item.item_price;
            } else if (mrpChecked == true) {
                var item_price = 0;
            } else {
                alert('something is wrong');
            }
            appProxy.addItems_SA(category_id, item_name, item_price, status, add_inventory).then(function (response) {
                if (response.message == 'item_exist') {
                    $scope.itemExistError_SA = true;
                    //$scope.inventoryItemErrorMsg_SA = false;
                } else {
                    $scope.animate = false;
                    $scope.choices = [];
                    $scope.item = null;
                    $scope.itemPrice_disabled = false;
                    $scope.getItemList_manageItems_SA(category_id);
                }
            });
        };
        $scope.getInventoryList_SA = function () {
            $scope.pageLoader = true;
            var branch_id = $scope.locationList_SA.branch_id;
            $scope.inventoryList_SA = [];
            appProxy.getInventoryList_SA(branch_id).then(function (response) {
                if (response.message == 'success') {
                    $scope.inventoryList_SA = response.data[0].inventoryList;
                    $scope.pageLoader = false;
                } else {
                    $scope.inventoryList_SA = null;
                    $scope.pageLoader = false;
                }
            });
        };


        //Edit Button Click
        $scope.editItemDetail_SA = function (item_id) {
            $scope.editItemPanel_SA = true;
            $scope.choicesEdit = [];
            var category_id = $scope.categoryList_SA.category_id;
            appProxy.editItemDetail_SA(category_id, item_id).then(function (response) {
                if (response.message == 'success') {
                    var item_inventory_details = response.data[0].item_inventory_details;
                    var itemInventoryList = response.data[0].item_inventory_details.itemInventoryList;
                    $scope.item_details = response.data[0].item_details;
                    if (item_inventory_details != false) {
                        $scope.choicesEdit = itemInventoryList;
                    }
                }
            });
        };

        //Edit Inventory Dynamically (While Updating Item)
        $scope.choicesEdit = [];
        $scope.selectedChoiceEdit = [];
        $scope.addInventoryEdit = function () {
            var newItemNo = $scope.choicesEdit.length + 1;
            $scope.choicesEdit.push({});
        };
        $scope.removeInventoryEdit = function () {
            var lastItem = $scope.choicesEdit.length - 1;
            $scope.choicesEdit.splice(lastItem);
        };

        $scope.editHidePriceOpt_SA = function () {
            $scope.editItemPrice_disabled = !$scope.editItemPrice_disabled;
            if (!$scope.editItemPrice_disabled) {
                $scope.item_details.item_price = null;
                $scope.editItemPrice_disabled = false;
                $scope.editItemRequired = true;
            } else if ($scope.editItemPrice_disabled) {
                $scope.item_details.item_price = 'MRP';
                $scope.editItemRequired = false;
            }
        };

        //Update Item Edit
        $scope.updateItem_SA = function () {
            var item_id = $scope.item_details.item_id;
            var item_name = $scope.item_details.item_name;
            var item_price = $scope.item_details.item_price;
            var item_status = $scope.item_details.status;
            var edit_inventory = $scope.choicesEdit;
            if (item_price == '') {
                $scope.editItemErrorMsg = true;
            } else {
                $scope.pageLoader = true;
                appProxy.updateItem_SA(item_id, item_name, item_price, item_status, edit_inventory).then(function (response) {
                    $scope.getItemList_manageItems_SA($scope.categoryList_SA.category_id);
                    $scope.editItemPanel_SA = false;
                    $scope.editItemErrorMsg = false;
                    $scope.pageLoader = false;
                });
            }
        };
        $scope.closeEditPanel_SA = function () {
            $scope.editItemPanel_SA = false;
        }


        //************* ADMIN PANEL **********************
        $scope.choices_A = [];
        $scope.selectedChoice_A = [];
        $scope.addInventory_A = function () {
            var newItemNo = $scope.choices_A.length + 1;
            $scope.choices_A.push({});
        };
        $scope.removeInventory_A = function () {
            var lastItem = $scope.choices_A.length - 1;
            $scope.choices_A.splice(lastItem);
        };
        $scope.getInventoryList_A = function () {
            $scope.inventoryList_A = [];
            appProxy.getInventoryList_A().then(function (response) {
                if (response.message == 'success') {
                    $scope.inventoryList_A = response.data[0].inventoryList;
                } else {
                    $scope.inventoryList_A = null;
                }
            });
        };
        $scope.getInventoryList_A();

        $scope.add_item_A = function () {
            $scope.animate = !$scope.animate;
        };
        $scope.getCategoryList_manageItems_A = function () {
            $scope.pageLoader = true;
            $scope.cL_A = [];
            appProxy.getCategoryList_manageItems_A().then(function (response) {
                $scope.cL_A = response.data[0].category_list;
                $scope.pageLoader = false;
            });
        };
        $scope.getItemList_manageItems_A = function () {
            $scope.pageLoader = true;
            $scope.iL_A = [];
            var category_id = $scope.categoryList_A.category_id;
            appProxy.getItemList_manageItems_A(category_id).then(function (response) {
                if (response.message != 'no_item') {
                    $scope.iL_A = response.data[0].item_list;
                    $scope.pageLoader = false;
                } else {
                    $scope.pageLoader = false;
                }

            });
        };
        $scope.editItem_A = function (item_id) {
            $scope.itemName_A = item_id;
            $scope.selectedItemName_A = item_id;
            $scope.itemPrice_A = item_id;
            $scope.selectedItemPrice_A = item_id;
            $scope.itemStatus_A = item_id;
            $scope.selectedItemStatus_A = item_id;
            $scope.editBtn_A = item_id;
            $scope.saveBtn_A = item_id;
            $scope.cancelBtn_A = item_id;
        };

        $scope.itemRequired_A = true;
        $scope.hidePriceOpt_A = function () {
            $scope.itemPrice_disabled_A = !$scope.itemPrice_disabled_A;
            if (!$scope.itemPrice_disabled_A) {
                $scope.item_A.item_price = null;
                /*$scope.itemPrice_dis = false;*/
                $scope.itemRequired_A = true;
            } else if ($scope.itemPrice_disabled_A) {
                $scope.item_A.item_price = 'MRP';
                $scope.itemRequired_A = false;
            }
        };
        $scope.addItems_A = function () {
            var add_inventory = $scope.choices_A;
            var category_id = $scope.categoryList_A.category_id;
            var item_name = $scope.item_A.item_name;
            var status = $scope.item_A.status;
            var mrpChecked_A = $scope.item_A.checked;
            if (mrpChecked_A == false || mrpChecked_A == undefined) {
                var item_price = $scope.item_A.item_price;
                //alert(item_price);
            } else if (mrpChecked_A == true) {
                var item_price = 0;
                //alert(item_price);
            } else {
                console.log('something is wrong');
            }

            if (add_inventory == '') {
                $scope.inventoryItemErrorMsg_A = true;
                $scope.itemExistError_A = false;
            } else {
                appProxy.addItems_A(category_id, item_name, item_price, status, add_inventory).then(function (response) {
                    if (response.message == 'item_exist') {
                        $scope.itemExistError_A = true;
                        $scope.inventoryItemErrorMsg_A = false;
                    } else {
                        $scope.animate = false;
                        $scope.choices_A = [];
                        $scope.item_A = null;
                        $scope.itemPrice_disabled_A = false;
                        $scope.inventoryItemErrorMsg_A = false;
                        $scope.itemExistError_A = false;
                        $scope.getItemList_manageItems_A();
                    }
                });
            }
        };
        $scope.updateItem_A = function (item_A) {
            var category_id = $scope.categoryList_A.category_id;
            var item_id = item_A.item_id;
            var item_name = item_A.item_name;
            var item_price = item_A.item_price;
            var status = item_A.status;
            appProxy.updateItem_A(category_id, item_id, item_name, item_price, status).then(function () {
                $scope.itemName_A = null;
                $scope.selectedItemName_A = null;
                $scope.itemPrice_A = null;
                $scope.selectedItemPrice_A = null;
                $scope.itemStatus_A = null;
                $scope.selectedItemStatus_A = null;
                $scope.editBtn_A = null;
                $scope.saveBtn_A = null;
                $scope.cancelBtn_A = null;
            });
        };
        $scope.cancelItem_A = function () {
            $scope.itemName_A = null;
            $scope.selectedItemName_A = null;
            $scope.itemPrice_A = null;
            $scope.selectedItemPrice_A = null;
            $scope.itemStatus_A = null;
            $scope.selectedItemStatus_A = null;
            $scope.editBtn_A = null;
            $scope.saveBtn_A = null;
            $scope.cancelBtn_A = null;
            $scope.getItemList_manageItems_A();
        };

        if ($scope.admin_role_id == 1) {
            $scope.getLocationList_ManageItems_SA();
            $scope.addItemContainer_SA = false;
        } else {
            $scope.addItemContainer_A = false;
            $scope.getCategoryList_manageItems_A();
        }
    }]);


    angular.module('mainApp').directive('validNumber', function () {
        return {
            require: '?ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                if (!ngModelCtrl) {
                    return;
                }
                ngModelCtrl.$parsers.push(function (val) {
                    if (angular.isUndefined(val)) {
                        var val = '';
                    }
                    var clean = val.replace(/[^.0-9]+/g, '');
                    if (val !== clean) {
                        ngModelCtrl.$setViewValue(clean);
                        ngModelCtrl.$render();
                    }
                    return clean;
                });
                element.bind('keypress', function (event) {
                    if (event.keyCode === 32) {
                        event.preventDefault();
                    }
                });
            }
        }
    });
}());