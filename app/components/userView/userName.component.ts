// /** @ngInject */



import { IUserVO } from './user.module';
import { MainCtrl } from '../mainView/mainView.component';
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
        },
        require: { mainCtrl: '^mainView' }
    };

}



// /** @ngInject */
export class UserNameCtrl {

    user:IUserVO;
    mainCtrl: MainCtrl;

    constructor( private $log: angular.ILogService, private $scope: angular.IScope) {
        $log.debug ('UserNameCtrl', this.user );
    }


    $onInit  (): void {
        this.$log.debug ( 'UserNameCtrl init', this.mainCtrl, this );
    }

    $postLink () {
        this.$log.debug ('UserNameCtrl postLink - all childs comp' );
    };

    $onChanges ( changesObj ) {
        this.$log.debug ('UserNameCtrl $onChanges oneWay Binding Update', changesObj );
    };

    $onDestroy () {
        this.$log.debug ('UserNameCtrl $onDestroy()' );
    };
}
