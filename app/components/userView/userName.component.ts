// /** @ngInject */



import { IUserVO } from './user.module';
export function userName(): angular.IComponentOptions {

    return {
        template:   '<input type="text" ng-model="userNameCtrl.user.firstname">' +
                    '<input type="text" ng-model="userNameCtrl.user.lastname">' +
                    '<span ng-transclude=""></span>',
        controller: UserNameCtrl,
        controllerAs: 'userNameCtrl',
        transclude: true,
        bindings: {
            user: '='  // bi-dir ohne {{}}
            // user: '@' // bi-dir mit {{}}
        }
    };

}



// /** @ngInject */
export class UserNameCtrl {

    user:IUserVO;

    constructor( private $log: angular.ILogService, private $scope: angular.IScope) {
        $log.debug ('UserNameCtrl', this.user );
    }
}
