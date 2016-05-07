import { Component, OnInit, OnDestroy} from '@angular/core';
import {Routes,Router,ROUTER_DIRECTIVES} from '@angular/router';
import {WelcomeComponent} from "./common/welcome/welcome.component";
import {SearchComponent} from "./common/search/search.component";
import {LoginComponent} from "./user/login.component";
import {HeaderComponent} from "./common/header/header.component";
import {FooterComponent} from "./common/footer/footer.component";
import {SidebarComponent} from "./common/sidebar/sidebar.component";
import {ProjectComponent} from "./project/project.component";
import {SpinnerService} from "./common/spinner/spinner.service";
import {SpinnerComponent} from "./common/spinner/spinner.component";
import {ClientComponent} from "./client/client.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MDL} from "./common/material/MDL";

@Component({
    selector: 'my-app',
    directives:[ROUTER_DIRECTIVES,WelcomeComponent,
        SearchComponent,LoginComponent,HeaderComponent,
        FooterComponent,SidebarComponent,ProjectComponent,
        SpinnerComponent,ClientComponent,DashboardComponent,MDL],
    providers:[SpinnerService],
    templateUrl:'./app/app.component.html'
})
@Routes([
    {path: '/welcome', component: WelcomeComponent},
    {path: '/login',        component: LoginComponent},
    {path: '/project',      component: ProjectComponent},
    {path: '/dashboard', component: DashboardComponent},
    {path: '/client',      component: ClientComponent}
])
export class AppComponent implements OnInit{
    public menuItems = [
        { caption: 'Dashboard', link: ['Dashboard'] },
        { caption: 'Characters', link: ['Characters'] },
        { caption: 'Vehicles', link: ['Vehicles'] }
    ];
    public dynamicArray:number[] = [];

    constructor(private router: Router) {

    }

    add(){
        this.dynamicArray.push(Math.round(Math.random() * 10));
    }

    ngOnInit() {
        //this.router.navigate(['/dashboard']);
    }
    
}
