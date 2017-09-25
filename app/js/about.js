(function(app){
    app.controller('aboutController', function($scope, $http, $window){
        $http({method: "GET", url: "config/user.json"}).success(function(response){
            $scope.user   =  response;
        });

        this.sendMail   =   function(emailId) {
            var subject    =    "[Online Resume]";
            var message     =   "Hi";
            $window.open("mailto:" + emailId + "?subject=" + subject+"&body=" + message, "_self");
        };
    });
})(app);
