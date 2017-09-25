(function(app){
    app.controller('experienceController', function($scope, $http)
    {
        var _this               =   this;
        $scope.experiences      =   {};
        $scope.totalExperience  =   '0'

        this.init   =   function()
        {
            $http({method: "GET", url: "config/experiences.json"}).then(function(response){
                $scope.experiences      =  response.data;
                $scope.totalExperience  =   _this.getOverallExperience($scope.experiences);
            });
        };

        this.getDifference  =   function(date1, date2)
        {
            var diff = Math.floor(date1.getTime() - date2.getTime());
            var day = 1000 * 60 * 60 * 24;

            var days = Math.floor(diff/day);
            var months = Math.floor(days/31) + 1;   //+1 for the leap year
            var years = (months/12).toFixed(1);

            return years;
        };

        this.getOverallExperience   =   function(experiences)
        {
            var ret =   0;

            if(Object.keys(experiences).length > 0)
            {
                var experience, role, period, lowest_date, tmp;
                var periods   =   [];

                for(experience in experiences)
                {
                    for(role in experiences[experience].roles)
                    {
                        period    =   experiences[experience].roles[role].periodFrom;

                        if($.trim(period) && (period).toLowerCase() !== 'present')
                        periods.push(period);
                    }
                }

                lowest_date     =   periods.reverse()[0];
                tmp             =   lowest_date.split("/");
                lowest_date     =   new Date(tmp[2], tmp[1] - 1, tmp[0]);
                today           =   new Date();

                ret =   this.getDifference(today, lowest_date);
            }

            return ret;
        };

        this.init();
    });

})(app);
