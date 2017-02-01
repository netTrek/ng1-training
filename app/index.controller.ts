import {IUsersService, IUserVO} from "./services/users/users.service";
import { IHelpService } from './services/help/help.service';
import { IModel } from './services/services.module';
export interface IDataScope {
  data?: string;
}

/** @ngInject */
export class AppController {

  private counter : number  = 0;

  userName:string = "Ich bin der AppController";
  userTemplate = "<h2>Saban Ünlü</h2>";

  userList: IUserVO[];
  user: IUserVO;



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
      this.userList = result.data;
    });
    */

    /*
    $users.createUsers( <IUserVO> {
      firstname: 'ifmpt'+ Date.now() ,
      lastname: 'ifmpt',
      city: 'Oberhausen',
      zip: 46145,
      street: 'Dorstenerstr.',
      street_no: 207,
      birthday: null
    }).then( ( response ) => {
      //console.info ( response );
      $users.getUsers().then ( ( result ) => {
        this.userList = result.data;
      });
    });
    */

    this.getFirstUser();


  }

  sayYourName () : void {
    this.$log.debug ( 'I´m the AppCtroller');
  }

  getFirstUser () {
    this.$users.getUser( 1 ).then ( (result)=> {
        //console.info ( result );
        this.user = result.data;
    });
  }

}
