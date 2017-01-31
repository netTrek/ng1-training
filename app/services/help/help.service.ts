

import IServiceProvider = angular.IServiceProvider;
export interface IHelpServiceProvider extends IServiceProvider {
    setCurrency ( currency: string );
    setPercent ( percent: number );
}

export interface IHelpService {
    calcTip ( price: number): string;
}

class HelpService implements IHelpService {

    constructor ( private currency:string,
                  private percent: number ) {

    }

    calcTip ( price : number ) : string {
        return ( price * this.percent / 100 ) + ' ' + this.currency;
    }

}

export class HelpServiceProvider implements IHelpServiceProvider {
    private currency: string = "€";
    private percent: number = 7;

    setCurrency ( currency : string ) {
        this.currency = currency;
    }

    setPercent ( percent : number ) {
        this.percent = percent;
    }

    $get () : HelpService {
        return new HelpService ( this.currency, this.percent );
    }
}