import { utilsConfigBlock } from './utils.config';
import { directiveFactory } from './directives/hover/hover.directive';
module app.utils {

    import IModule = angular.IModule;
    var utils:IModule = angular.module('app.utils', [] )
                               .config( utilsConfigBlock )
                               .directive('ntHover', directiveFactory )
    ;
}