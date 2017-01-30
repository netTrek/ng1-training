import { utilsConfigBlock } from './utils.config';
module app.utils {

    import IModule = angular.IModule;
    var utils:IModule = angular.module('app.utils', [] )
                               .config( utilsConfigBlock )
    ;
}