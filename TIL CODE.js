// 카드의 첫번째 자리수를 만들자.

      ​
      var extend = function(to, from){
            for (var key in from) {
              to[key] = from[key];
            }
          };
          
          var cookingMethods = {};
          cookingMethods.fry = function(){
            this.chicken += 1;
          };
          
          var KFC = function(num){
            var storage = {
              chicken : num
            };
            extend(KFC, cookingMethods);
            return storage;
          };
          
          var KFC잠실점 = KFC(26);