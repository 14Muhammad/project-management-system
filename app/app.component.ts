import { Component, OnInit, OnDestroy} from '@angular/core';
import {Routes,Router,ROUTER_DIRECTIVES} from '@angular/router';
import {WelcomeComponent} from "./common/welcome/welcome.component";
import {SearchComponent} from "./common/search/search.component";
import {LoginComponent} from "./user/login.component";
import {HeaderComponent} from "./common/header/header.component";
import {FooterComponent} from "./common/footer/footer.component";
import {SidebarComponent} from "./common/sidebar/sidebar.component";
import {ProjectComponent} from "./project/project.component";

@Component({
    selector: 'my-app',
    directives:[ROUTER_DIRECTIVES,WelcomeComponent,SearchComponent,LoginComponent,HeaderComponent,
        FooterComponent,SidebarComponent,ProjectComponent],
    template: `
                   <header-component></header-component>
                   <sidebar-component></sidebar-component>
                   <div class="container">
                        <p>My First Angular 2 App Testing !</p>
                        
                        <router-outlet></router-outlet>
                        
                        <a [routerLink]="['/login']">go to login</a>
                        <a [routerLink]="['/project']">Go to Projects</a>

                    </div>
                    <footer-component> </footer-component>
                    `
})
@Routes([
    {path: '/welcome', component: WelcomeComponent},
    {path: '/login',        component: LoginComponent},
    {path: '/project',      component: ProjectComponent}
])
export class AppComponent implements OnInit{
    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['/welcome']);
    }
    
}
