/// <reference path="../typings/main.d.ts" />

import IModule = angular.IModule;
import {runBlock} from "./index.run";
import { configBlock } from './index.config';

module app {

    var app:IModule = angular.module('app', [] )
            .run( runBlock )
            .config( ()=> {
                console.log ( 'config block 1' );
            })
            .config( configBlock )
            .value( 'netTrek', 'super' )
            /* play */
        ;

}
