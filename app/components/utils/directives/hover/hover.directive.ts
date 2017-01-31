/**
 * Created by suenlue on 17.05.16.
 */

interface IntHoverScope extends angular.IScope {
    ntHover?:string;
}

export function directiveFactory():angular.IDirective {
    return <angular.IDirective> {
        restrict: 'A',
        scope: {
            ntHover: '@' //     {{}}
        },
        link: <angular.IDirectiveLinkFn>function ( scope:IntHoverScope,
                                                   elem:angular.IAugmentedJQuery,
                                                   attr:angular.IAttributes):void {

            console.log ( scope , elem, attr );

            elem.on ('mouseover', function () {
                elem.css( 'color', scope.ntHover || 'green' );
            });
            elem.on ('mouseout', function () {
                elem.css( 'color', null );
            });

            elem.on ('$destroy', function () {
                elem.off( 'mouseover' );
                elem.off( 'mouseout' );
                elem.off( '$destroy' );
                console.log ("removed");
            });
        }
    };
}