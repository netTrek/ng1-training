

import { HelpServiceProvider } from './help/help.service';

export interface IModelService {
    num1: number;
    num2: number;
}

export interface IModelCalcService {
    sum (): number;
}

/** @ngInject */
export class ModelCalcService implements IModelCalcService {

    constructor ( private $model: IModelService ) {}

    sum () : number {
        return this.$model.num1 + this.$model.num2;
    }


}


module app.services {

    import IModule = angular.IModule;
    let serviceModule : IModule = angular.module( 'app.service', [] )
            .provider( '$help', HelpServiceProvider )
            .factory( '$model', () : IModelService => {
                return <IModelService> {
                    num1: 1,
                    num2: 2
                }
            })
            .service ( '$modeCalc', ModelCalcService )
        ;

}