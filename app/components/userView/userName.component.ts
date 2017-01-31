// /** @ngInject */



import { IUserVO } from './user.module';
export function userName(): angular.IComponentOptions {

    return {
        template: ($element:angular.IAugmentedJQuery)=>{
            console.warn( $element );

            let inputs:Array<{type:string, modelExp:string}> = [    {type:'text', modelExp:'userNameCtrl.user.firstname'},
                                                                    {type:'text', modelExp:'userNameCtrl.user.lastname'}
                ],
                lng: number = inputs.length
                ;
            var out:string ='<p>',
                i = 0,
                item:{type:string, modelExp:string}
                ;

            for ( i; i<lng; i++) {
                item = inputs[i];
                out += '<input type="'+item.type+'" ng-model="'+item.modelExp+'">';
            }

            out += '</p><p ng-transclude></p>';
            return out;

        },
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
