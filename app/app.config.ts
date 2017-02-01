import IProvideService = angular.auto.IProvideService;
import ICompileProvider = angular.ICompileProvider;
/** @ngInject */
export function configBlock ( $provide: IProvideService, $compileProvider : ICompileProvider ) {
    console.log ( 'configBlock' );
    $compileProvider.debugInfoEnabled( false );
    $provide.constant( 'version', 12.3 );
    $provide.value( 'author', 'saban uenlue' );
}