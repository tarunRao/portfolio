(function(app){
    app.controller('educationController', function($scope, $http)
    {
        $scope.educations  =   {};

        $http({method: "GET", url: "config/educations.json"}).success(function(response){
            $scope.educations   =  response;
        });
    });

})(app);
