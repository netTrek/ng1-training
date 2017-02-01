
import {IUsersProvider} from "./services/users/users.service";
import { IHelpServiceProvider } from './services/help/help.service';
/** @ngInject */
export function configBlock ( $tipCalcProvider: IHelpServiceProvider,
                              $httpProvider: angular.IHttpProvider,
                              $usersProvider: IUsersProvider) {
  $tipCalcProvider.setCurrency( '$' );
  $tipCalcProvider.setPercent( 10 );

  // $httpProvider.defaults.headers.common [ 'If-Modified-Since' ] = 'Sat, 20 Jul 2013 10:10:10 GMT';
  // $usersProvider.setEndpoint( 'mock/users.json?' );

  $usersProvider.setEndpoint( 'http://rest-api.flexlab.de/index.php/api/user' );
}




