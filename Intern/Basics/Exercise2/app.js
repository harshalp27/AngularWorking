var app = angular.module("BasicsExeapp2", [])
app.controller('BasicsExeCtrl2', function($scope){
                          
               $scope.firstName = "Hello";
               $scope.lastName = "Friend";
               $scope.fullName = $scope.firstName + " " + $scope.lastName;
               
                          
               });
