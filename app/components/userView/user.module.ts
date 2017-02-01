import {IDataScope} from "../../index.controller";
import { userHeader } from './userHeader.component';
import { userName } from './userName.component';
import { userNameIso } from './userNameIso.component';
import { userButton } from './userButton.component';


export interface IUserVO {
    firstname:string;
    lastname:string;
}


module app.main {

    class UserCtrl {


        user: IUserVO = {
          firstname: 'saban',
          lastname: 'ünlü'
        };

        imgFile:string = '5507692-cat-m.jpg';

        constructor( private $scope:IDataScope, private $element:angular.IAugmentedJQuery, private $log:angular.ILogService) {

            $log.debug ( $scope , $element, this.$scope.data );

        }
    }

    import IModule = angular.IModule;
    var user:IModule = angular.module('app.user', [] )
        .controller( 'UserCtrl', UserCtrl )
        .component( 'userHeader', userHeader() )
        .component( 'userName', userName() )
        .component( 'userButton', userButton() )
        .component( 'userNameIso', userNameIso() )
    ;
}