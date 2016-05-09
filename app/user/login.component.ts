import {Component} from '@angular/core';
import {FORM_DIRECTIVES,CORE_DIRECTIVES,
    NgForm,NgFormControl,NgFormModel,FormBuilder,Control,ControlGroup, Validators} from '@angular/common';
import {MDL} from "../common/material/MDL";
import {Observable} from 'rxjs/Rx';


@Component({
    selector:'login-component',
    directives: [MDL,CORE_DIRECTIVES,
        FORM_DIRECTIVES,
        NgForm,NgFormControl,
        NgFormModel],

    templateUrl: '../app/user/login.component.html'
})

export class LoginComponent{
    public loginForm;
    constructor(fb: FormBuilder) {
        this.loginForm = new ControlGroup({
            email: new Control("", Validators.required),
            password: new Control("", Validators.required)
        });
    }

    doLogin(event) {
        console.log(event);
        console.log(this.loginForm.value);
        event.preventDefault();
    }

}