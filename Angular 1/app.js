/*global console, alert, prompt, angular*/

(function () {
    'use strict';
    
    angular.module('myFirstApp', [])
    
        .controller('myCrtl', myFunc);
    
    myFunc.$inject = ['$scope'];
    function myFunc($scope) {
        $scope.dishes = " ";
        $scope.result = " ";
        
        $scope.displayDish = function () {
            var totalResult = check($scope.dishes);
            $scope.result = totalResult;
        };
        
        function check(string) {
            var i,
                value;
            if (string.charAt(i) === 0) {
                value = "Please enter data first";
            
            } else if (3 >= string.charAt(i) >= 1) {
                value = "Enjoy!";
                
            } else {
                value = "Too much!";
            }
            
            return string;
        }
    }
    
}());