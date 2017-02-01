import ILogService = angular.ILogService;

/** @ngInject */
export function truncateFilter ($log: ILogService) {
    return function ( input:string, lng:number = 5 ) {
        $log.debug ('in', input );

        if ( angular.isString( input) && angular.isNumber( lng ) )
        {
            if ( input.length <= lng )
                return input;
            return input.substring( 0, lng-3 ) + '...';
        }
        return input;
    }
}
