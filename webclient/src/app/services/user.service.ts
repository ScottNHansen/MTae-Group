import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../business/user';

@Injectable()
export class UserService {

    private _isLoggedIn: boolean = false;
    public user: User;

    public get isLoggedIn(): boolean {
        return this._isLoggedIn
    }
    redirectURL: string;

    constructor(private http: Http, private router: Router) {

    }

    public login(user: User): boolean {
        this._isLoggedIn = true;
        this.user = user;
        return true;
    }
    public logout(): boolean {
        this.user = null;
        this._isLoggedIn=false;
        return true;
    }
    public checkCredentials():void {
        if (!this.isLoggedIn) {
            this.router.navigate(['login'])
        }
    }
}