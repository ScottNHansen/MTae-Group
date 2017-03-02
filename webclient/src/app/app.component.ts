import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './business/user';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    pageTitle: string = "Vivaldi";

    constructor(private userService: UserService) {

    }
}
