/// <reference path="../typings/main.d.ts" />

import IModule = angular.IModule;
import {runBlock} from "./index.run";

module app {

    var app:IModule = angular.module('app', [] )
                             .run( runBlock )
        ;

}
