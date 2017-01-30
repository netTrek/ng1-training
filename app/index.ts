/// <reference path="../typings/main.d.ts" />

import IModule = angular.IModule;

module app {

    var app:IModule = angular.module('app', [] )
                             .run( ()=>{
                                 console.log ( 'run app' );
                             });
    console.info ( app );

}