var app = angular.module("BasicsExeapp1", [])
app.controller('BasicsExeCtrl1', function($scope){
                          
               $scope.firstNumber = 10
               $scope.secondNumber = 20
               $scope.total = $scope.firstNumber + $scope.secondNumber;
               
                          
               });
