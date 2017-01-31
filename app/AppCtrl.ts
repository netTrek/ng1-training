import { IAppScope } from './index';
import IAugmentedJQuery = angular.IAugmentedJQuery;
/** @ngInject */
export class AppCtrl {

    //eigenschaft: string = 'wert';
    eigenschaft = 'neuer <h1>wert!!!</h1>' +
        '<script>alert(\'test\');</script>';

    list: string[] = ['saban','hans','peter'];

    constructor ( $scope: IAppScope,
                  private $element: IAugmentedJQuery ) {
        console.log ( 'myAppCtrl' , $scope, $element );
    }

    sayHello (): string {
        console.log ( 'sayHello' );
        return '<strong>hello world!</strong>';
    }

    clickHandler () {
        this.eigenschaft = 'neuer <h1>wert</h1>';
        this.$element.css( 'color', 'yellow' );
    };
    
}