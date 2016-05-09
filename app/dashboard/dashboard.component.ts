import {Component} from '@angular/core';
import {MDL} from "../common/material/MDL";

@Component({
    selector:'dashboard-component',
    directives: [MDL],
    templateUrl: '../app/dashboard/dashboard.component.html'
})

export class DashboardComponent{
    public name:string = 'ali';

}