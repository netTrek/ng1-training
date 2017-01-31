import {UsersServiceProvider} from "./users/users.service";
import { HelpServiceProvider } from './help/help.service';

export interface IModel {
    num1: number;
    num2: number;
}

module app.services {

    import IModule = angular.IModule;

    var services:IModule = angular.module('app.services', [])
        .provider( '$tipCalc', HelpServiceProvider )
        .factory ( '$model', (): IModel =>{
            return <IModel>{
                num1: 1,
                num2: 2
            }
        })
        //.provider( '$users', UsersServiceProvider )
    ;
}
