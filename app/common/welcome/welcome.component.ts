import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    selector:'welcome-component',
    directives:[ROUTER_DIRECTIVES],
    templateUrl: '../app/common/welcome.component.html',
    template:'<h2>Welcome {{name}} </h2>' +
    ' <a [routerLink]="[\'/login\']">Login</a>'
})

export class WelcomeComponent{
    public name:string = 'ali';

}