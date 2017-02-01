// /** @ngInject */

import {IDataScope} from "../../index.controller";

/** @ngInject */
export class MainCtrl {

    usrId:number = 1;

    constructor(private $scope:IDataScope, private $element:angular.IAugmentedJQuery, private $log:angular.ILogService) {
        // $log.debug ( $scope , $element, this.$scope.data );
    }

    selectUserById(id:number = 1) {
        this.$scope.$root.$broadcast('selectUserById', id);
    }

}
export function mainView(): angular.IComponentOptions {

    return {
        template: '<main ng-transclude></main>',
        controller: MainCtrl,
        controllerAs: 'mainCtrl',
        transclude: true
    };

}
