import {IDataScope} from "../../index.controller";
module app.main {



    class MainCtrl {

        selected:boolean = false;

        constructor( private $scope:IDataScope,
                     private $element:angular.IAugmentedJQuery,
                     private $log:angular.ILogService) {

            $log.debug ( $scope , $element, this.$scope.data );



            this.$scope.$on('userChg', (event:angular.IAngularEvent)=>{
                console.log ( 'main', event );
            });

        }


        onSelectionChg () : void {
            this.$log.debug ( this.selected );
            if ( this.selected ) {
                console.info ( 'emit' );
                this.$scope.$emit( 'userChg', {data:true} );
            } else {
                console.info ( 'broadcast' );
                this.$scope.$broadcast( 'userChg', {data:true} );
            }
        }
    }

    import IModule = angular.IModule;
    var main:IModule = angular.module('app.main', [] )
        .controller( 'MainCtrl', MainCtrl )
    ;
}