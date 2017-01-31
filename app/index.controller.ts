import IScope = angular.IScope;
export interface IDataScope extends IScope{
  data?: string;
}

/** @ngInject */
export class AppController {

  userName:string = "Ich bin der AppController";
  userTemplate = "<h2>Saban Ünlü</h2>";
  myClass: string;

  lng: number = this.userName.length;
  num: number = 5;
  maxInd: number = Math.floor( this.lng / this.num) - 1
  ind: number = 0;


  constructor( private $scope:IDataScope, private $element:angular.IAugmentedJQuery, private $log:angular.ILogService) {

    $log.debug ( $scope , $element, this.$scope.data );

    this.$scope.data = 'let´s go...';


  }


  onKeyUp (event:angular.IAngularEvent) : void {
    this.$log.debug ( 'up', event );
  }

  onInputChg () : void {
    if ( this.$scope.data === 'main' ) {
      this.myClass = 'active';
    } else {
      this.myClass = '';
    }
  }

  sayYourName () : void {
    this.$log.debug ( 'I´m the AppCtroller');
  }

}
