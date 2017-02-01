// /** @ngInject */
export function userButton(): angular.IComponentOptions {

    return {
        // /** @ngInject */
        template: '<button ng-click="userButtonCtrl.ntClick()" ng-transclude></button>',
        controller: UserButtonCtrl,
        controllerAs: 'userButtonCtrl',
        bindings: {
            ntClick: '&'
        },
        transclude: true
    };

}

// /** @ngInject */
export class UserButtonCtrl {

    constructor( private $log: angular.ILogService, private $scope: angular.IScope) {
        $log.debug ( 'UserButtonCtrl' );
    }
}
