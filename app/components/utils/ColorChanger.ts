/**
 * Created by suenlue on 16.05.16.
 */

export class ColorChanger {

    constructor ( private target:HTMLElement ) {
        console.log ( target );
        this.init ();
    }

    changeColor ( color:string = "green" ): void {
        console.log ( color );
        this.target.style.color = color;
    }

    private init(): void {
        this.changeColor();
    }


}