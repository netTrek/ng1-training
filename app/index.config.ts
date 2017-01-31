
import {IUsersProvider} from "./services/users/users.service";
import { IHelpServiceProvider } from './services/help/help.service';
/** @ngInject */
export function configBlock ( $tipCalcProvider: IHelpServiceProvider,
                              $httpProvider: angular.IHttpProvider,
                              $usersProvider: IUsersProvider) {
  $tipCalcProvider.setCurrency( '$' );
  $tipCalcProvider.setPercent( 10 );
  $usersProvider.setEndpoint( 'mock/users.json' );
}




