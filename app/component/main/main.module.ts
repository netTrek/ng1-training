import { IModelService } from '../../services/services.module';
/**
 * Created by suenlue on 01.02.17.
 */


module app.main {

    import IModule = angular.IModule;
    let mainModule: IModule = angular.module( 'app.module', [])
        .controller( 'MainCtrl', ( $model: IModelService )=> {
            console.info ( $model );
        })

}