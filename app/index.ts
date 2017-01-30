/// <reference path="../typings/main.d.ts" />

import IModule = angular.IModule;
import {runBlock} from "./index.run";
import { configBlock } from './index.config';
import './components/utils/utils.module.ts';
module app {

    var app:IModule = angular.module('app', ['app.utils'] )
            .run( runBlock )
            .config( ()=> {
                console.log ( 'config block 1' );
            })
            .config( configBlock )
            .value( 'netTrek', 'super' )
            .constant( 'ifmpt', 4711 )
            .run ( ( version:string, author: string )=>{
                console.log ( version, author );
            })
            /* play */
        ;

}
