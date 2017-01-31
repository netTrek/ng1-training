
import {IUsersProvider} from "./services/users/users.service";
/** @ngInject */
export function configBlock ($httpProvider: angular.IHttpProvider, $usersProvider: IUsersProvider) {
  $usersProvider.setEndpoint( 'mock/users.json' );
  console.log ( 'LegacyPromiseExtensions deaktiviert' );
}
