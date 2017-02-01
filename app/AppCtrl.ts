import { IAppScope } from './index';
import IAugmentedJQuery = angular.IAugmentedJQuery;
/** @ngInject */
export class AppCtrl {

    //eigenschaft: string = 'wert';
    eigenschaft = 'neuer <h1>wert!!!</h1>' +
        '<script>alert(\'test\');</script>';

    foo: number = 300;
    ba: number = 300;
    className: string = 'red';

    imgBase: string = 'www.planet-wissen.de/sendungen/'
    imgUrl: string = 'katzen-zwei-junge-100~_v-gseapremiumxl.jpg';

    link: string = 'http://netTrek.de';

    list: string[] = ['saban','hans','peter'];

    constructor ( $scope: IAppScope,
                  private $element: IAugmentedJQuery ) {
        console.log ( 'myAppCtrl' , $scope, $element );
    }

    out ( mEvt?: MouseEvent ) {
        console.log ( 'out', mEvt );
    }

    over ( event?: MouseEvent ) {
        console.log ( 'over', event );
    }

    enter ( mEvt?: MouseEvent, ...args: any[] ) {
        console.log ( 'enter', mEvt, args );
        //this.className = 'yellow';
    }

    leave ( event?: MouseEvent, ...args: any[] ) {
        console.log ( 'leave', event, args );
        //this.className = 'red';
    }

    chg () {
        console.log ( 'new value of foo', this.foo );
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