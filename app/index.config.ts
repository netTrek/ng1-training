
import {IUsersProvider} from "./services/users/users.service";
import { IHelpServiceProvider } from './services/help/help.service';
/** @ngInject */
export function configBlock ( $tipCalcProvider: IHelpServiceProvider ) {
  $tipCalcProvider.setCurrency( '$' );
  $tipCalcProvider.setPercent( 10 );
}



/*

export function configBlock ( $httpProvider: angular.IHttpProvider,
                              $usersProvider: IUsersProvider) {
  $usersProvider.setEndpoint( 'mock/users.json' );
  console.log ( 'LegacyPromiseExtensions deaktiviert' );
}
*/

