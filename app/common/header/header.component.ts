import {Component} from '@angular/core';
import {Routes,Router,ROUTER_DIRECTIVES} from '@angular/router';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {MDL} from "../material/MDL";

@Component({
    selector: 'header-component',
    providers : [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES,SidebarComponent,MDL],
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
