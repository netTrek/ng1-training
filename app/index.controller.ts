import {IUsersService, IUserVO} from "./services/users/users.service";
import { IHelpService } from './services/help/help.service';
import { IModel } from './services/services.module';
export interface IDataScope {
  data?: string;
}

/** @ngInject */
export class AppController {

  userName:string = "Ich bin der AppController";
  userTemplate = "<h2>Saban Ünlü</h2>";

  constructor( private $scope:IDataScope,
               private $element:angular.IAugmentedJQuery,
               private $log:angular.ILogService,
               /*private $users:IUsersService, */
               private $tipCalc: IHelpService,
               private $model: IModel
  ) {

    $log.debug ( $scope , $element, this.$scope.data );

    this.$scope.data = 'let´s go...' + $tipCalc.calcTip( 100 );

    console.info ( $model );

    $model.num1 *= 100;


    /*
    $users.getUsers().then( ( result:any )=>{
      this.$log.debug ( result );
      this.$log.debug ( result.data[0] );
      this.$scope.data += (<IUserVO>result.data[0]).firstname;
    });
    */

  }

  sayYourName () : void {
    this.$log.debug ( 'I´m the AppCtroller');
  }

}
