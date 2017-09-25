(function(app){
    app.controller('skillsController', function($scope, $http){
        var scope       =   this;
        scope.skills    =   {};

        $http({method: "GET", url: "config/skills.json"}).then(function(response){
            scope.skills   =  response.data;

            $(function () {
                scope.initChart();
            });
        });

        this.initChart  =   function() {
            var skill, nb_tech, total_ratings;

            for(skill in scope.skills)
            {
                nb_tech     =   total_ratings   =   0;

                for(tech in scope.skills[skill].ratings)
                {
                    total_ratings   +=  scope.skills[skill].ratings[tech];

                    ++nb_tech;
                }

                scope.skills[skill].rate    =   Math.round(total_ratings / nb_tech);
            }

            //To update live value
            $scope.$apply(function() { scope.skills });
        };

        this.loadChart  =   function(name, skillset) {
            var wrapper     =   document.createElement('div');
            var div         =   document.createElement('div');

            $(div)
            .addClass('skillset')
            .circliful({
               animationStep        : 5,
               foregroundBorderWidth: 5,
               backgroundBorderWidth: 5,
               textBelow            : true,
               percent              : skillset.rate,
               text                 : skillset.name
           });

            $(wrapper)
            .addClass('col-sm-2')
            .append(div);

           $('#skills').append(wrapper);
        };
    });

})(app);
