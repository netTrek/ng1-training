import {truncateFilter} from "./truncate.filter";
module app.filters {

    import IModule = angular.IModule;

    var filters:IModule = angular.module('app.filters', [])
        .filter( 'truncate', truncateFilter )
    ;
}
