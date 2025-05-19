import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient){}
    
    signup(mail: string, passw: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAShN_DPGYZO3f2C-6ypGdJVWwOyUaBmMQ',
        {  
            email: mail,
            password: passw, 
            returnSecureToken: true
        }
        );
    }
}