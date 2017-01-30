
import IProvideService = angular.auto.IProvideService;
/** @ngInject */
export function utilsConfigBlock ($provide: IProvideService ) {
  $provide.value( 'version', 'v1.0');
  $provide.constant( 'author', 'netTrek');
  console.log ( 'utils config' );
}
