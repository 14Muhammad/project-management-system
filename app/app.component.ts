import { Component } from '@angular/core';
import {HeaderComponent} from "./common/header.component";
import {FooterComponent} from "./common/footer.component";

@Component({
    selector: 'project-management-system',
    directives:[HeaderComponent,FooterComponent],
    template: '<header-component></header-component>' +
    '<div class="container">' +
    '   Project Management System' +
    '</div>' +
    '<footer-component></footer-component>'
})
export class AppComponent {
    
}
