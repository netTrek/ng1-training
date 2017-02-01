import {IDataScope} from "../../index.controller";
import { IModel, IModelCalc } from '../../services/services.module';
module app.main {

    class UserCtrl {

        private removeListener: Function;
        imgFile:string = '5507692-cat-m.jpg';

        constructor( private $scope:IDataScope,
                     private $element:angular.IAugmentedJQuery,
                     private $model: IModel,
                     private $modelCalc: IModelCalc,
                     private $log:angular.ILogService) {

            $log.debug ( $scope , $element, this.$scope.data, $model, $modelCalc.sum() );

            this.$scope.$on('$destroy', () => {
                console.info ( 'destroy' );
            });

            this.removeListener = this.$scope.$on('userChg', (event:angular.IAngularEvent, payload: any)=>{
                console.log ( 'user', payload, event );
                if ( !payload.data ) {
                    this.removeListener ();
                }
            });

        }
    }

    import IModule = angular.IModule;
    var user:IModule = angular.module('app.user', [] )
        .controller( 'UserCtrl', UserCtrl )
    ;
}