import {IDataScope} from "../../index.controller";
module app.main {



    class MainCtrl {

        selected:boolean = false;

        constructor( private $scope:IDataScope,
                     private $element:angular.IAugmentedJQuery,
                     private $log:angular.ILogService) {

            $log.debug ( $scope , $element, this.$scope.data );

        }


        onSelectionChg () : void {
            this.$log.debug ( this.selected );
        }
    }

    import IModule = angular.IModule;
    var main:IModule = angular.module('app.main', [] )
        .controller( 'MainCtrl', MainCtrl )
    ;
}