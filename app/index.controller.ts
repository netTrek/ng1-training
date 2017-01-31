import {IUsersService, IUserVO} from "./services/users/users.service";
import { IHelpService } from './services/help/help.service';
import { IModel } from './services/services.module';
import IResource = angular.resource.IResource;
import IResourceArrayMethod = angular.resource.IResourceArrayMethod;
import IResourceArray = angular.resource.IResourceArray;
export interface IDataScope {
  data?: string;
}

/** @ngInject */
export class AppController {

  userName:string = "Ich bin der AppController";
  userTemplate = "<h2>Saban Ünlü</h2>";

  user: IUserVO;
  //users: IResource<IUserVO[]>;
  users: IResourceArray<IUserVO>;

  constructor( private $scope:IDataScope,
               private $element:angular.IAugmentedJQuery,
               private $log:angular.ILogService,
               private $users:IUsersService,
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

    /*
    $users.createUser (
        <IUserVO>{
          "firstname": "Saban - " + Date.now(),
          "lastname": "netTrek - " + Date.now(),
          "birthday": "1975-11-11",
          "street": null,
          "street_no": null,
          "zip": null,
          "city": null
        }
    ).then( ( result:angular.IHttpPromiseCallbackArg<IUserVO> )=>{
      this.user = result.data;
    });

    this.getFirstUser ();
    */


    this.users = $users.query();
    this.users.$promise.then( ( result:Array<IUserVO>)=>{
      $log.debug (result);
      this.user = result[0];
    })

  }


  getFirstUser () : void {

    /*
    this.$users.getUser( 1 ).then( ( result:angular.IHttpPromiseCallbackArg<IUserVO> )=>{
      this.user = result.data;
    });
    */

  }

  sayYourName () : void {
    this.$log.debug ( 'I´m the AppCtroller');
  }

}
