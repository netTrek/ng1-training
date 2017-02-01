import IServiceProvider = angular.IServiceProvider;
import ILogService = angular.ILogService;
/**
 * Created by suenlue on 01.02.17.
 */

export interface IHelpService {
    calcTip ( price: number ) : string;
}

export interface IHelpServiceProvider extends IServiceProvider {
    setCurrency ( currency: string );
    setPercent ( percent: number );
}

class HelpService implements IHelpService {

    constructor ( private currency: string,
                  private percent: number ) {}

    calcTip ( price : number ) : string {
        return ( price * this.percent / 100 ) + this.currency;
    }
}


export class HelpServiceProvider implements IHelpServiceProvider {
    private currency: string = "€";
    private percent: number= 5;

    setCurrency ( currency : string ) {
        this.currency = currency;
    }

    setPercent ( percent : number ) {
        this.percent = percent;
    }

    /** @ngInject */
    $get ( $log: ILogService ) : any {
        $log.debug( 'create singleton og HelpService ');
        return new HelpService( this.currency, this.percent );
    }

}