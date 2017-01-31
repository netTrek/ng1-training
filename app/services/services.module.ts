import {UsersServiceProvider} from "./users/users.service";
import { HelpServiceProvider } from './help/help.service';

export interface IModel {
    num1: number;
    num2: number;
}

export interface IModelCalc {
    sum (): number;
}

/** @ngInject */
class ModelCalc implements IModelCalc {
    constructor ( private $model: IModel ) {}

    sum () : number {
        return this.$model.num1 + this.$model.num2;
    }

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
        .service( '$modelCalc', ModelCalc )
        .provider( '$users', UsersServiceProvider )
    ;
}
