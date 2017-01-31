import {IDataScope} from "../../index.controller";
import { IModel } from '../../services/services.module';
module app.main {

    class UserCtrl {


        imgFile:string = '5507692-cat-m.jpg';

        constructor( private $scope:IDataScope,
                     private $element:angular.IAugmentedJQuery,
                     private $model: IModel,
                     private $log:angular.ILogService) {

            $log.debug ( $scope , $element, this.$scope.data, $model );

        }
    }

    import IModule = angular.IModule;
    var user:IModule = angular.module('app.user', [] )
        .controller( 'UserCtrl', UserCtrl )
    ;
}