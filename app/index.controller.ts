import {IUsersService, IUserVO} from "./services/users/users.service";
export interface IDataScope {
  data?: string;
}

/** @ngInject */
export class AppController {

  userName:string = "Ich bin der AppController";
  userTemplate = "<h2>Saban Ünlü</h2>";

  constructor( private $scope:IDataScope, private $element:angular.IAugmentedJQuery, private $log:angular.ILogService, private $users:IUsersService ) {

    $log.debug ( $scope , $element, this.$scope.data );

    this.$scope.data = 'let´s go...';

    $users.getUsers().then( ( result:any )=>{
      this.$log.debug ( result );
      this.$log.debug ( result.data[0] );
      this.$scope.data += (<IUserVO>result.data[0]).firstname;
    })

  }

  sayYourName () : void {
    this.$log.debug ( 'I´m the AppCtroller');
  }

}
