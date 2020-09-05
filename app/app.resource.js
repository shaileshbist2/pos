(function () {
    angular.module('mainApp').constant('mainResources', {
        authServiceApi: {
            companyLogin: appServiceBaseUrl + 'companyLogin'
        },

        appReaderServiceApi: {
            getInventoryAllotmentHistory: appServiceBaseUrl + 'getInventoryAllotmentHistory'
        },
        appWriterServiceApi: {
            branchLogin: appServiceBaseUrl + 'branchLogin',
            companySign_up: appServiceBaseUrl + 'company_sign_up',
            deleteRegisterData: appServiceBaseUrl + 'deleteRegisterData',
            addRegisterDetails: appServiceBaseUrl + 'addRegisterDetails',
            getCategoryList: appServiceBaseUrl + 'getCategoryList',
            getCategoryInfo: appServiceBaseUrl + 'getCategoryInfo',
            updateCategory: appServiceBaseUrl + 'updateCategory',
            addCategory: appServiceBaseUrl + 'addCategory',
            setDetails: appServiceBaseUrl + 'setDetails',


            getTotalOrdersAndPrice_SA: appServiceBaseUrl + 'getTotalOrdersAndPrice_SA',
            branchLocationList: appServiceBaseUrl + 'branchLocationList',
            getTotalOrdersAndPrice_A: appServiceBaseUrl + 'getTotalOrdersAndPrice_A',
            companyResetPassword: appServiceBaseUrl + 'companyResetPassword',
            sendCompanyResetPasswordLink: appServiceBaseUrl + 'sendCompanyResetPasswordLink',
            getLocationList: appServiceBaseUrl + 'getLocationList',
            addLocation: appServiceBaseUrl + 'addLocation',
            getLocationInfoForUpdate: appServiceBaseUrl + 'getLocationInfoForUpdate',
            updateLocation: appServiceBaseUrl + 'updateLocation',
            locationDropDownList: appServiceBaseUrl + 'locationDropDownList',


            //----------------------- MANAGE USERS SA ----------------------
            getLocationList_manageUsers_SA: appServiceBaseUrl + 'getLocationList_manageUsers_SA',
            getUserList_manageUsers_SA: appServiceBaseUrl + 'getUserList_manageUsers_SA',
            addNewUser_SA: appServiceBaseUrl + 'addNewUser_SA',
            getUserInfo_SA: appServiceBaseUrl + 'getUserInfo_SA',
            updateUser_SA: appServiceBaseUrl + 'updateUser_SA',
            getUserList_manageUsers_A: appServiceBaseUrl + 'getUserList_manageUsers_A',
            getUserInfo_A: appServiceBaseUrl + 'getUserInfo_A',
            addNewUser_A: appServiceBaseUrl + 'addNewUser_A',
            updateUser_A: appServiceBaseUrl + 'updateUser_A',

            //---------------------- MANAGE VENDOR ---------------------------
            getVendorList_SA: appServiceBaseUrl + 'getVendorList_SA',
            addNewVendor_SA: appServiceBaseUrl + 'addNewVendor_SA',
            updateVendor_SA: appServiceBaseUrl + 'updateVendor_SA',


            //---------------------- MANAGE INVENTORY SA -----------------------------------------
            getLocationList_Inventory_SA: appServiceBaseUrl + 'getLocationList_Inventory_SA',
            add_new_inventory_SA: appServiceBaseUrl + 'add_new_inventory_SA',
            inventoryList_manageInventory_SA: appServiceBaseUrl + 'inventoryList_manageInventory_SA',


            //----------------------- MANAGE ITEMS SA -----------------------
            getLocationList_ManageItems_SA: appServiceBaseUrl + 'getLocationList_ManageItems_SA',
            getCategoryList_manageItems_SA: appServiceBaseUrl + 'getCategoryList_manageItems_SA',
            getItemList_manageItems_SA: appServiceBaseUrl + 'getItemList_manageItems_SA',
            addItems_SA: appServiceBaseUrl + 'addItems_SA',
            updateItem_SA: appServiceBaseUrl + 'updateItem_SA',
            getInventoryList_SA: appServiceBaseUrl + 'getInventoryList_SA',
            editItemDetail_SA: appServiceBaseUrl + 'editItemDetail_SA',

            //--------------------- MANAGE ORDER SA ------------------------
            getLocationList_ManageOrders_SA: appServiceBaseUrl + 'getLocationList_ManageOrders_SA',
            getOrderList_SA: appServiceBaseUrl + 'getOrderList_SA',
            getItemOrderList_SA: appServiceBaseUrl + 'getItemOrderList_SA',


            //----------------- Manage Category A ------------------------------------
            categoryList_A: appServiceBaseUrl + 'categoryList_A',
            addCategory_A: appServiceBaseUrl + 'addCategory_A',
            updateCategory_A: appServiceBaseUrl + 'updateCategory_A',


            //------------------ Manage Items A ----------------------------------------
            getCategoryList_manageItems_A: appServiceBaseUrl + 'getCategoryList_manageItems_A',
            getItemList_manageItems_A: appServiceBaseUrl + 'getItemList_manageItems_A',
            addItems_A: appServiceBaseUrl + 'addItems_A',
            updateItem_A: appServiceBaseUrl + 'updateItem_A',
            getInventoryList_A: appServiceBaseUrl + 'getInventoryList_A',


            getOrderList_A: appServiceBaseUrl + 'getOrderList_A',
            getItemOrderList_A: appServiceBaseUrl + 'getItemOrderList_A',


            //---------------- SETTING FOR SA ------------------
            getTaxInfo: appServiceBaseUrl + 'getTaxInfo',
            updateCompanyLogo: appServiceBaseUrl + 'updateCompanyLogo',
            getAddressInfo: appServiceBaseUrl + 'getAddressInfo',
            updateAddressInfo: appServiceBaseUrl + 'updateAddressInfo',
            get_company_info: appServiceBaseUrl + 'get_company_info',
            updateCompanyName: appServiceBaseUrl + 'updateCompanyName',
            updateCompanyNickName: appServiceBaseUrl + 'updateCompanyNickName',
            updateCIN: appServiceBaseUrl + 'updateCIN',
            updateSTN: appServiceBaseUrl + 'updateSTN',
            updateTINCST: appServiceBaseUrl + 'updateTINCST',
            updateTAXVAT: appServiceBaseUrl + 'updateTAXVAT',
            setOpt1: appServiceBaseUrl + 'setOpt1',
            updateVisibilityOpt1: appServiceBaseUrl + 'updateVisibilityOpt1',
            setOpt2: appServiceBaseUrl + 'setOpt2',
            updateVisibilityOpt2: appServiceBaseUrl + 'updateVisibilityOpt2',
            setOpt3: appServiceBaseUrl + 'setOpt3',
            updateVisibilityOpt3: appServiceBaseUrl + 'updateVisibilityOpt3',
            setOpt4: appServiceBaseUrl + 'setOpt4',
            updateVisibilityOpt4: appServiceBaseUrl + 'updateVisibilityOpt4',
            setOpt5: appServiceBaseUrl + 'setOpt5',
            updateVisibilityOpt5: appServiceBaseUrl + 'updateVisibilityOpt5',

            //*** Inventory Category
            addInventoryCategory_SA: appServiceBaseUrl + 'addInventoryCategory_SA',
            updateInventoryCategory_SA: appServiceBaseUrl + 'updateInventoryCategory_SA',
            inventoryCategoryList_SA: appServiceBaseUrl + 'inventoryCategoryList_SA',
            

            //**** Inventory Item
            inventoryItemList_SA: appServiceBaseUrl + 'inventoryItemList_SA',
            addInventoryItem_SA: appServiceBaseUrl + 'addInventoryItem_SA',
            updateInventoryItem_SA: appServiceBaseUrl + 'updateInventoryItem_SA',

            //--------------- MANAGE INVENTORY ---------------------
            locationList_allotInventory_SA: appServiceBaseUrl + 'locationList_allotInventory_SA',
            inventoryList_allotInventory_SA: appServiceBaseUrl + 'inventoryList_allotInventory_SA',
            /*          inventoryList_SA: appServiceBaseUrl + 'inventoryList_SA',*/
            updateInventory_SA: appServiceBaseUrl + 'updateInventory_SA',
            measurementList_SA: appServiceBaseUrl + 'measurementList_SA',
            addInventoryItemTo_branch: appServiceBaseUrl + 'addInventoryItemTo_branch',
            getItemList_allotInventory_SA: appServiceBaseUrl + 'getItemList_allotInventory_SA',
            updateAllotInventoryItem_SA: appServiceBaseUrl + 'updateAllotInventoryItem_SA',
            addNewInventoryAfterReset: appServiceBaseUrl + 'addNewInventoryAfterReset',
            addQuantity_SA: appServiceBaseUrl + 'addQuantity_SA',


            //------------- Manage Offers --------------------------------------
            locationList_offer_SA: appServiceBaseUrl + 'locationList_offer_SA',
            updateOffer: appServiceBaseUrl + 'updateOffer',
        }
    })
}());