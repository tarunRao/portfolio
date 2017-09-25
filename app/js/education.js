(function(app){
    app.controller('educationController', function($scope, $http)
    {
        $scope.educations  =   {};

        $http({method: "GET", url: "config/educations.json"}).then(function(response){
            $scope.educations   =  response.data;
        });
    });

})(app);
