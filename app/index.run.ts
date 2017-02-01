import IRootScopeService = angular.IRootScopeService;
/** @ngInject */
export function runBlock( $log: angular.ILogService,
                          netTrek: string,
                          ifmpt: number,
                          $rootScope: IRootScopeService ) {
  $log.debug('run app', netTrek, ifmpt );

  $rootScope.$on('userChg', (event:angular.IAngularEvent)=>{
    console.log ( '$rootScope', event );
  });
}
