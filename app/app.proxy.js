(function () {
    angular.module('mainApp').factory('appProxy', ['$http', '$q', 'mainResources', 'apiService', function ($http, $q, mainResources, apiService) {
        var appService = {};

        appService.sign_up = function (first_name, last_name, email, mobile_number, password, re_password) {
            var inputParam = $.param({
                first_name: first_name,
                last_name: last_name,
                email: email,
                mobile_number: mobile_number,
                password: password,
                re_password: re_password
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.companySign_up, inputParam, header);
        };


        appService.deleteRegisterData = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.deleteRegisterData, header);
        };

        appService.addRegisterDetails = function (companyName, companyNickName, companyTax, companyLogo) {
            var inputParam = $.param({
                companyName: companyName,
                companyNickName: companyNickName,
                companyTax: companyTax,
                companyLogo: companyLogo
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addRegisterDetails, inputParam, header);
        };


        /*appService.addNewLocation_R = function (first_name, last_name, mobile_number, email_id, password, location_name, address, status) {
         var inputParam = $.param({
         first_name: first_name,
         last_name: last_name,
         mobile_number: mobile_number,
         email_id: email_id,
         password: password,
         location_name: location_name,
         address: address,
         status: status
         });
         var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
         return apiService.executePostMethod(mainResources.appWriterServiceApi.addNewLocation_R, inputParam, header);
         };*/


        /*appService.getRoleIdToken = function(){
         var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
         return apiService.executePostMethod(mainResources.appWriterServiceApi.getRoleIdToken, header);
         };*/

        /*appService.locationList_R = function(){
         var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
         return apiService.executePostMethod(mainResources.appWriterServiceApi.locationList_R, header);
         };*/

        appService.branchLogin = function (branch_email, branch_password) {
            var inputParam = $.param({
                branch_email: branch_email,
                branch_password: branch_password
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.branchLogin, inputParam, header);
        };

        appService.getCategoryList = function (location_id) {
            var inputParam = $.param({
                location_id: location_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getCategoryList, inputParam, header);
        };

        appService.getCategoryInfo = function (category_id) {
            var inputParam = $.param({
                category_id: category_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getCategoryInfo, inputParam, header);
        };

        appService.updateCategory = function (category_id, branch_id, category_name, status) {
            if (status == 'active') {
                status = 1;
            } else {
                status = 0;
            }
            var inputParam = $.param({
                category_id: category_id,
                branch_id: branch_id,
                category_name: category_name,
                status: status
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateCategory, inputParam, header);
        };

        appService.addCategory = function (location_id, category_name, status) {
            var inputParam = $.param({
                location_id: location_id,
                category_name: category_name,
                status: status
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addCategory, inputParam, header);
        };

        appService.setDetails = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.setDetails, header);
        };

        appService.getLocationList_ManageItems_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getLocationList_ManageItems_SA, header);
        };


        appService.getLocationList_Inventory_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getLocationList_Inventory_SA, header);
        };


        appService.getCategoryList_manageItems_SA = function (branch_id) {
            var inputParam = $.param({
                branch_id: branch_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getCategoryList_manageItems_SA, inputParam, header);
        };

        appService.getItemList_manageItems_SA = function (category_id) {
            var inputParam = $.param({
                category_id: category_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getItemList_manageItems_SA, inputParam, header);
        };

        appService.addItems_SA = function (category_id, item_name, item_price, status, add_inventory) {
            var inputParam = $.param({
                category_id: category_id,
                item_name: item_name,
                item_price: item_price,
                status: status,
                add_inventory: add_inventory
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addItems_SA, inputParam, header);
        };


        appService.getInventoryList_SA = function (branch_id) {
            var inputParam = $.param({
                branch_id: branch_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getInventoryList_SA, inputParam, header);
        };

        appService.getInventoryList_A = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getInventoryList_A, header);
        };


        appService.updateItem_SA = function (item_id, item_name, item_price, item_status, edit_inventory) {
            var inputParam = $.param({
                item_id: item_id,
                item_name: item_name,
                item_price: item_price,
                item_status: item_status,
                edit_inventory: edit_inventory
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateItem_SA, inputParam, header);
        };

        appService.editItemDetail_SA = function (category_id, item_id) {
            var inputParam = $.param({
                category_id: category_id,
                item_id: item_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.editItemDetail_SA, inputParam, header);
        };


        appService.getLocationList_ManageOrders_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getLocationList_ManageOrders_SA, header);
        }

        appService.getOrderList_SA = function (branch_id, start_date, end_date) {
            var inputParam = $.param({
                branch_id: branch_id,
                start_date: start_date,
                end_date: end_date
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getOrderList_SA, inputParam, header);
        };

        appService.getItemOrderList_SA = function (order_id) {
            var inputParam = $.param({
                order_id: order_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getItemOrderList_SA, inputParam, header);
        }

        appService.getTotalOrdersAndPrice_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getTotalOrdersAndPrice_SA, header);
        };

        appService.branchLocationList = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.branchLocationList, header);
        };

        appService.getTotalOrdersAndPrice_A = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getTotalOrdersAndPrice_A, header);
        };

        appService.resetPassword = function (company_token, new_password) {
            var inputParam = $.param({
                company_token: company_token,
                new_password: new_password
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.companyResetPassword, inputParam, header);
        };

        appService.sendResetPasswordLink = function (company_email) {
            var inputParam = $.param({
                company_email: company_email
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.sendCompanyResetPasswordLink, inputParam, header);
        };

        appService.getLocationList = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getLocationList, header);
        };


        appService.updateLocation = function (location_id, first_name, last_name, mobile_number, email_id, password, location_name, address, status) {
            var inputParam = $.param({
                location_id: location_id,
                first_name: first_name,
                last_name: last_name,
                mobile_number: mobile_number,
                email_id: email_id,
                password: password,
                location_name: location_name,
                address: address,
                status: status
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateLocation, inputParam, header);
        };

        appService.addLocation = function (first_name,
                                           last_name,
                                           mobile_number,
                                           email_id,
                                           password,
                                           location_name,
                                           location_address) {
            var inputParam = $.param({
                first_name: first_name,
                last_name: last_name,
                mobile_number: mobile_number,
                email_id: email_id,
                password: password,
                location_name: location_name,
                location_address: location_address
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addLocation, inputParam, header);
        };


        appService.getLocationInfoForUpdate = function (location_id) {
            var inputParam = $.param({
                location_id: location_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getLocationInfoForUpdate, inputParam, header);
        };

        appService.locationDropdownList = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.locationDropDownList, header);
        };

        appService.getLocationList_manageUsers_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getLocationList_manageUsers_SA, header);
        };

        appService.getUserList_manageUsers_SA = function (branch_id) {
            var inputParam = $.param({
                branch_id: branch_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getUserList_manageUsers_SA, inputParam, header);
        };

        appService.addNewUser_SA = function (branch_id, first_name, last_name, email_id, password, mobile_number, status) {
            var inputParam = $.param({
                branch_id: branch_id,
                first_name: first_name,
                last_name: last_name,
                email_id: email_id,
                password: password,
                mobile_number: mobile_number,
                status: status
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addNewUser_SA, inputParam, header);
        };


        appService.getUserInfo_SA = function (user_id) {
            var inputParam = $.param({
                user_id: user_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getUserInfo_SA, inputParam, header);
        };


        appService.updateUser_SA = function (user_id, first_name, last_name, email_id, password, mobile_number, status) {
            var inputParam = $.param({
                user_id: user_id,
                first_name: first_name,
                last_name: last_name,
                email_id: email_id,
                password: password,
                mobile_number: mobile_number,
                status: status
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateUser_SA, inputParam, header);
        };

        appService.getUserList_manageUsers_A = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getUserList_manageUsers_A, header);
        };

        appService.getUserInfo_A = function (user_id) {
            var inputParam = $.param({
                user_id: user_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getUserInfo_A, inputParam, header);
        };


        appService.addNewUser_A = function (first_name, last_name, email_id, password, mobile_number, status) {
            var inputParam = $.param({
                first_name: first_name,
                last_name: last_name,
                email_id: email_id,
                password: password,
                mobile_number: mobile_number,
                status: status
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addNewUser_A, inputParam, header);
        };


        appService.updateUser_A = function (user_id, first_name, last_name, email_id, password, mobile_number, status) {
            var inputParam = $.param({
                user_id: user_id,
                first_name: first_name,
                last_name: last_name,
                email_id: email_id,
                password: password,
                mobile_number: mobile_number,
                status: status
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateUser_A, inputParam, header);
        };


        //------------ Manage Vendor ---------------------
        appService.getVendorList_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getVendorList_SA, header);
        };

        appService.addNewVendor_SA = function (vendor_name, full_name, email_id, mobile_number, address) {
            var inputParam = $.param({
                vendor_name: vendor_name,
                full_name: full_name,
                email_id: email_id,
                mobile_number: mobile_number,
                address: address
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addNewVendor_SA, inputParam, header);
        };

        appService.updateVendor_SA = function (vendor) {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateVendor_SA, vendor, header);
        };


        //------------ Setting ----------------------------
        appService.getTaxInfo = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getTaxInfo, header);
        };


        appService.updateCompanyLogo = function (update_company_logo) {
            var inputParam = $.param({
                update_company_logo: update_company_logo
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateCompanyLogo, inputParam, header);
        };

        appService.getAddressInfo = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getAddressInfo, header);
        };

        appService.updateAddressInfo = function (company_address) {
            var input_param = $.param({
                company_address: company_address
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateAddressInfo, input_param, header);
        };

        appService.get_company_info = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.get_company_info, header);
        };

        appService.updateCompanyName = function (company_name) {
            var inputParam = $.param({
                company_name: company_name
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateCompanyName, inputParam, header);
        };

        appService.updateCompanyNickName = function (company_nick_name) {
            var inputParam = $.param({
                company_nick_name: company_nick_name
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateCompanyNickName, inputParam, header);
        };

        appService.updateCIN = function (company_cin) {
            var inputParam = $.param({
                company_cin: company_cin
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateCIN, inputParam, header);
        };

        appService.updateSTN = function (company_stn) {
            var inputParam = $.param({
                company_stn: company_stn
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateSTN, inputParam, header);
        };

        appService.updateTINCST = function (company_tin_cst) {
            var inputParam = $.param({
                company_tin_cst: company_tin_cst
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateTINCST, inputParam, header);
        };

        appService.updateTAXVAT = function (company_tax_vat) {
            var inputParam = $.param({
                company_tax_vat: company_tax_vat
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateTAXVAT, inputParam, header);
        };

        appService.setOpt1 = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.setOpt1, header);
        };
        appService.updateVisibilityOpt1 = function (optFlag1) {
            var inputParam = $.param({
                optFlag1: optFlag1
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateVisibilityOpt1, inputParam, header);
        };

        appService.setOpt2 = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.setOpt2, header);
        };
        appService.updateVisibilityOpt2 = function (optFlag2) {
            var inputParam = $.param({
                optFlag2: optFlag2
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateVisibilityOpt2, inputParam, header);
        };

        appService.setOpt3 = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.setOpt3, header);
        };
        appService.updateVisibilityOpt3 = function (optFlag3) {
            var inputParam = $.param({
                optFlag3: optFlag3
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateVisibilityOpt3, inputParam, header);
        };

        appService.setOpt4 = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.setOpt4, header);
        };
        appService.updateVisibilityOpt4 = function (optFlag4) {
            var inputParam = $.param({
                optFlag4: optFlag4
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateVisibilityOpt4, inputParam, header);
        };

        appService.setOpt5 = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.setOpt5, header);
        };
        appService.updateVisibilityOpt5 = function (optFlag5) {
            var inputParam = $.param({
                optFlag5: optFlag5
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateVisibilityOpt5, inputParam, header);
        };


        //*** Inventory Category
        appService.addInventoryCategory_SA = function (category_name, status) {
            var inputParam = $.param({
                category_name: category_name,
                status: status
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addInventoryCategory_SA, inputParam, header);
        };
        appService.inventoryCategoryList_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.inventoryCategoryList_SA, header);
        };

        appService.updateInventoryCategory_SA = function (editInventoryCategory) {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateInventoryCategory_SA, editInventoryCategory, header);
        };
        
        //**** Inventory Item
        appService.inventoryItemList_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.inventoryItemList_SA, header);
        };
        appService.addInventoryItem_SA = function (inventory_category_id, item_name, status) {
            var inputParam = $.param({
                inventory_category_id: inventory_category_id,
                item_name: item_name,
                status: status
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addInventoryItem_SA, inputParam, header);
        };
        appService.updateInventoryItem_SA = function (editInventoryItem) {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateInventoryItem_SA, editInventoryItem, header);
        };


        //**************** ADMIN PANEL ***********************************

        appService.categoryList_A = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.categoryList_A, header);
        };

        appService.addCategory_A = function (category_name, status) {
            var inputParam = $.param({
                category_name: category_name,
                status: status
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addCategory_A, inputParam, header);
        };

        appService.updateCategory_A = function (category_id, category_name, status) {
            var inputParam = $.param({
                category_id: category_id,
                category_name: category_name,
                status: status
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateCategory_A, inputParam, header);
        };

        appService.getCategoryList_manageItems_A = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getCategoryList_manageItems_A, header);
        };

        appService.getItemList_manageItems_A = function (category_id) {
            var inputParam = $.param({
                category_id: category_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getItemList_manageItems_A, inputParam, header);
        };

        appService.addItems_A = function (category_id, item_name, item_price, status, add_inventory) {
            var inputParam = $.param({
                category_id: category_id,
                item_name: item_name,
                item_price: item_price,
                status: status,
                add_inventory: add_inventory
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addItems_A, inputParam, header);
        };

        appService.updateItem_A = function (category_id, item_id, item_name, item_price, status) {
            var inputParam = $.param({
                category_id: category_id,
                item_id: item_id,
                item_name: item_name,
                item_price: item_price,
                status: status
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateItem_A, inputParam, header);
        };

        appService.getOrderList_A = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getOrderList_A, header);
        };

        appService.getItemOrderList_A = function (order_id) {
            var inputParam = $.param({
                order_id: order_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getItemOrderList_A, inputParam, header);
        };

        appService.add_new_inventory_SA = function (inventory_name, measurement_id) {
            var inputParam = $.param({
                inventory_name: inventory_name,
                measurement_id: measurement_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.add_new_inventory_SA, inputParam, header);
        };

        appService.inventoryList_manageInventory_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.inventoryList_manageInventory_SA, header);
        };

        appService.updateInventory_SA = function (inventory_id, inventory_name, measurement_id) {
            var inputParam = $.param({
                inventory_id: inventory_id,
                inventory_name: inventory_name,
                measurement_id: measurement_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateInventory_SA, inputParam, header);
        };


        //---------------------------- Allot Inventory ---------------------------------------
        appService.locationList_allotInventory_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.locationList_allotInventory_SA, header);
        };

        appService.inventoryList_allotInventory_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.inventoryList_allotInventory_SA, header);
        };

        appService.addQuantity_SA = function (inventoryId, quantity) {
            var inputParam = $.param({
                inventoryId: inventoryId,
                quantity: quantity
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addQuantity_SA, inputParam, header);
        };

        appService.measurementList_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.measurementList_SA, header);
        };

        appService.addInventoryItemTo_branch = function (bid, iid, qty) {
            var inputParam = $.param({
                branchId: bid,
                inventoryId: iid,
                quantity: qty
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addInventoryItemTo_branch, inputParam, header);
        };

        appService.addNewInventoryAfterReset = function (bid, iid, qty) {
            var inputParam = $.param({
                branchId: bid,
                inventoryId: iid,
                quantity: qty
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.addNewInventoryAfterReset, inputParam, header);
        };

        appService.getItemList_allotInventory_SA = function (branch_id) {
            var inputParam = $.param({
                branch_id: branch_id
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.getItemList_allotInventory_SA, inputParam, header);
        };

        appService.updateAllotInventoryItem_SA = function (branch_id, allot_inventory_id, quantity) {
            var inputParam = $.param({
                branch_id: branch_id,
                allot_inventory_id: allot_inventory_id,
                quantity: quantity
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateAllotInventoryItem_SA, inputParam, header);
        };


        //------------- Manage Offers --------------------------
        appService.locationList_offer_SA = function () {
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.locationList_offer_SA, header);
        };

        appService.updateOffer = function (branch_id, promotional_offer) {
            var inputParam = $.param({
                branch_id: branch_id,
                promotional_offer: promotional_offer
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appWriterServiceApi.updateOffer, inputParam, header);
        };

        appService.getInventoryAllotmentHistory = function (bid, iid, sDate, eDate) {
            var inputParam = $.param({
                branchId: bid,
                inventoryId: iid,
                startDate: sDate,
                endDate: eDate
            });
            var header = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
            return apiService.executePostMethod(mainResources.appReaderServiceApi.getInventoryAllotmentHistory, inputParam, header);
        };

        return appService;
    }]);
}());