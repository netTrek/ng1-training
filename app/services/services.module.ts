

import { HelpServiceProvider } from './help/help.service';
module app.services {

    import IModule = angular.IModule;
    let serviceModule : IModule = angular.module( 'app.service', [] )
            .provider( '$help', HelpServiceProvider )
        ;

}