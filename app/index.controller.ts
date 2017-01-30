
/** @ngInject */
export class AppController {

  constructor($scope:angular.IScope, $element:angular.IAugmentedJQuery, $log:angular.ILogService) {
    
    $log.debug ( $scope , $element);

  }

}
