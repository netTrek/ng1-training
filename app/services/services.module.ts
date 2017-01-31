import {UsersServiceProvider} from "./users/users.service";
module app.services {

    import IModule = angular.IModule;

    var services:IModule = angular.module('app.services', [])
        .provider( '$users', UsersServiceProvider )
    ;
}
