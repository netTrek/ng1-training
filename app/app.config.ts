import IProvideService = angular.auto.IProvideService;
import ICompileProvider = angular.ICompileProvider;
import { IHelpServiceProvider } from './services/help/help.service';
/** @ngInject */
export function configBlock ( $provide: IProvideService,
                              $compileProvider : ICompileProvider,
                              $helpProvider: IHelpServiceProvider  ) {
    console.log ( 'configBlock' );

    $helpProvider.setCurrency( '$' );
    $helpProvider.setPercent( 10 );

    $compileProvider.debugInfoEnabled( true );
    $provide.constant( 'version', 12.3 );
    $provide.value( 'author', 'saban uenlue' );
}