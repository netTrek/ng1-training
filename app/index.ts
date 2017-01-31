/// <reference path="../typings/main.d.ts" />

import IModule = angular.IModule;
import {runBlock} from "./index.run";
import { configBlock } from './index.config';
import { AppController } from './index.controller';

import './components/utils/utils.module.ts';
import './components/mainView/main.module.ts'
import './components/userView/user.module.ts'
import './services/services.module.ts'


module app {

    var app:IModule = angular.module('app', [ 'ngSanitize', 'app.utils', 'app.main', 'app.user', 'app.services'] )
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
            .controller( 'AppCtrl', AppController )
        ;

}
