import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment"
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

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
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.apiKey,
        {  
            email: mail,
            password: passw, 
            returnSecureToken: true
        }
        ).pipe(catchError(errorResponse => {
            let errorMessage = 'An error occured.';

            if(!errorResponse.error || !errorResponse.error.error) {
                return throwError(errorMessage);
            } else {
                switch (errorResponse.error.error.message) {
                    case 'EMAIL_EXISTS':
                        errorMessage = 'This email already exists!'
                }
            }
            return throwError(errorMessage);
        }));
    }
}