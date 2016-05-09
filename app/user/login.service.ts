import {Http} from '@angular/http';

export class LoginService{
constructor(private http: Http){

}
    doLogin(){
        /*return this.http.post("https://google.com")
            .map(res => res.text);*/
    }
}