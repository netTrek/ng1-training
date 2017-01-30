
interface IAppControllerScope extends angular.IScope {
  sayYourName (): void;
}

/** @ngInject */
export class AppController {

  userName:string = "Ich bin der AppController";

  constructor( private $scope:IAppControllerScope, private $element:angular.IAugmentedJQuery, private $log:angular.ILogService) {

    $log.debug ( $scope , $element);

    this.init ();

  }

  private init () {
    this.$scope.sayYourName = () => {
      this.$log.debug ( 'I´m the AppCtroller');
    }
  }
}
