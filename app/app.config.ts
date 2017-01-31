import IProvideService = angular.auto.IProvideService;
/** @ngInject */
export function configBlock ( $provide: IProvideService ) {
    console.log ( 'configBlock' );
    $provide.constant( 'version', 12.3 );
    $provide.value( 'author', 'saban uenlue' );
}