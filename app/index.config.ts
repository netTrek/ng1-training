
/** @ngInject */
export function configBlock ($httpProvider: angular.IHttpProvider, $logProvider:angular.ILogProvider ) {
  $logProvider.debugEnabled( true );
  console.log ( 'config block 2' );
}
