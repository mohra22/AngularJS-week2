(function () {
'use strict';

    angular.module('module2App',[])
    .controller('toBuyController', toBuyController)
    .controller('boughtController', boughtController)
    .service('shoppingListCheckoffService',shoppingListCheckoffService);

    toBuyController.$inject=['shoppingListCheckoffService'];
    function toBuyController(shoppingListCheckoffService)
    {
        var tobuy = this;
        tobuy.addShoptoSold = function(index){
            shoppingListCheckoffService.addShoptoSold(index);
        }
        tobuy.getTobuyList = shoppingListCheckoffService.getTobuyList();
    }
    boughtController.$inject=['shoppingListCheckoffService'];
    function boughtController(shoppingListCheckoffService)
    {
        var toSold = this;
        toSold.getSoldList = shoppingListCheckoffService.getSoldList();
    }
    function shoppingListCheckoffService()
    {
        var service = this;

        var shoppingList = [
            {
            name: "Chips",
            quantity: 10
            },
            {
                name: "Pepsi",
                quantity: 15
            },
            {
                name: "Banana",
                quantity: 2
            },
            {
                name: "Coffee",
                quantity: 17
            }
            ];

            var soldList = 
             [{}];
            service.addShoptoSold = function(index,cnt)
            {
                

                var shopListItems = shoppingList[index];
                
                var item = {
                    name : shopListItems.name, 
                    quantity : shopListItems.quantity
                };
                soldList.push(item);
                shoppingList.splice(index,1);
                if (shoppingList.length===0){

                    document.getElementById("everythingBought").style.display = "block";
                }
                //console.log(shoppingList.length);

                document.getElementById("nothingBought").style.display = "none";
                
            }

            service.getTobuyList = function()
            {
                
                return shoppingList;
            }
            service.getSoldList = function()
            {
                return soldList;
            }
            
    }

})();
