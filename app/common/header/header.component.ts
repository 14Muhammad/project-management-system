import {Component} from '@angular/core';
import {Routes,Router,ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'header-component',
    providers : [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '../app/common/header/header.component.html',
    styleUrls:[]
})


export class HeaderComponent {
    public menuItems = [
        { caption: 'Dashboard', link: ['Dashboard'] },
        { caption: 'Characters', link: ['Characters'] },
        { caption: 'Vehicles', link: ['Vehicles'] }
    ];

}
