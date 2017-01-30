
import ISCEService = angular.ISCEService;
/** @ngInject */
export class AppController {

  userName:string = "Ich bin der AppController";
  userTemplate = "<h3>Saban Ünlü</h3>";
  num1:number = 0;
  num2:number = 0;
  private _userMail: string;

  constructor( private $scope:angular.IScope, private $element:angular.IAugmentedJQuery, private $log:angular.ILogService, private $sce:ISCEService ) {

    $log.debug ( $scope , $element);

  }

  userMail ( value?:string ) {
    if ( value )
    {
      this._userMail = value;
    }
    else {
      return this._userMail;
    }
  }

  sayYourName () : void {
    this.$log.debug ( 'I´m the AppCtroller');
  }

  getTrustedHTML (): string {
    this.$log.debug ('getTrustedHTML');
    return this.$sce.trustAsHtml( '<strong>cool!</strong>' );
  }


}
