module app.utils {

    import IModule = angular.IModule;
    var utils:IModule = angular.module('app.utils', [] )
       .config(()=>{
            console.log ( 'config utils' ); 
       })
        .value( 'version', 'v1.0')
        .constant( 'author', 'netTrek')
    ;
}