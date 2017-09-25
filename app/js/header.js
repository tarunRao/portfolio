(function(app){
    app.controller('headerController', function($scope, appConfig, $location, $anchorScroll) {
        this.menus      =	appConfig.menu;
        this.current    =   'about';

        this.setMenu    =   function(menu) {
            this.current    =   menu;

            //scroll to the menu location
            $location.hash(this.current);
            $anchorScroll();
        };

        this.isSet   =   function(menu) {
            return this.current === menu;
        };
    });
})(app);
