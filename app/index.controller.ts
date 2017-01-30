
/** @ngInject */
export class AppController {

  userName:string = "Ich bin der AppController";

  constructor( private $scope:angular.IScope, private $element:angular.IAugmentedJQuery, private $log:angular.ILogService) {
    $log.log ( $scope , $element);
  }


}
