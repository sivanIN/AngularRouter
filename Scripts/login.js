var app = angular.module('login',['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
       templateUrl:"loginform.html"
    })
    .when('/dashboard',{
        templateUrl:"dashboard.html"
    })
    .when('/logout',{
        templateUrl:"loginform.html"
    })
    .when('/contacts',{
        templateUrl:"contacts.html"
    })
    .otherwise({
       redirectTo:"/"
    })
})

app.controller('loginCtrl',function($scope,$location){
    $scope.sumbit=function(){
        var username=$scope.username;
        var password=$scope.password;
        if(username=="admin"&& password=="admin"){
            $location.path('/dashboard');
        }else{
            alert("password is incorrect ")
        }
    }
})

app.controller('logoutCtrl',function($scope,$location){
    $scope.logout=function(){
        
        
            $location.path('/logout');

        
    }
    $scope.contacts=function(){
        $location.path('/contacts'); 

    }
})