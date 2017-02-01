/// <reference path="../typings/main.d.ts" />
import { runBlock } from './app.run';
import { configBlock } from './app.config';

import './component/utils/version.module'
import './services/services.module'

import IScope = angular.IScope;
import { AppCtrl } from './AppCtrl';

export interface IAppScope extends IScope {
    eigenschaft?: string;
    clickHandler: Function;
}

module app {

    import IScope = angular.IScope;
    import IAugmentedJQuery = angular.IAugmentedJQuery;
    let appModule: angular.IModule = angular.module( 'app',
        ['ngSanitize', 'app.version', 'app.service'] )
        .config( configBlock)
        .run( runBlock )
        .controller('AppCtrl', AppCtrl )
    ;
    //console.log ( appModule );
    //console.log ( appModule === angular.module( 'app' ) );

}

