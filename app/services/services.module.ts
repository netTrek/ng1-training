import {UsersServiceProvider} from "./users/users.service";
import { HelpServiceProvider } from './help/help.service';
module app.services {

    import IModule = angular.IModule;

    var services:IModule = angular.module('app.services', [])
        .provider( '$tipCalc', HelpServiceProvider )
        //.provider( '$users', UsersServiceProvider )
    ;
}
