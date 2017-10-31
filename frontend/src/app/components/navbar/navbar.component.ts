import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    loginOrJoin : string;

    login() {
        this.loginOrJoin = 'login';
    }

    join() {
        this.loginOrJoin = 'join';
    }

    onSubmit() {

    }
}
