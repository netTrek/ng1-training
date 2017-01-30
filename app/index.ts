/// <reference path="../typings/main.d.ts" />

import {ColorChanger} from './components/utils/ColorChanger';

var h1:ColorChanger = new ColorChanger ( <HTMLElement>document.getElementsByTagName('h1')[0]);
h1.changeColor( '#97ffb1' );
