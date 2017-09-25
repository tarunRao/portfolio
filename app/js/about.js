(function(app){
    app.controller('aboutController', function($scope, $http, $window){
        $http({method: "GET", url: "config/user.json"}).then(function(response){
            $scope.user   =  response.data;
        });

        this.sendMail   =   function(emailId) {
            var subject    =    "[Online Resume]";
            var message     =   "Hi";
            $window.open("mailto:" + emailId + "?subject=" + subject+"&body=" + message, "_self");
        };
    });
})(app);
