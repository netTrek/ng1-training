// /** @ngInject */
export function userNameIso(): angular.IComponentOptions {

    return {
        template: '<p> - <input type="text" ng-model="userNameIsoCtrl.firstname"></p>',
        controller: UserNameIsoCtrl,
        controllerAs: 'userNameIsoCtrl',
        bindings: {
            firstname: '<'  // one-way ohne {{}}
            // user: '='  // bi-dir ohne {{}}
            // user: '@' // bi-dir mit {{}}
        }
    };

}

// /** @ngInject */
export class UserNameIsoCtrl {

    firstname:string;

    constructor( private $log: angular.ILogService, private $scope: angular.IScope) {
        $log.debug ('UserNameIsoCtrl');
    }

    $onInit () {
        this.$log.debug ('UserNameIsoCtrl init', this.firstname);
    }
}
