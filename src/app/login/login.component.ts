import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login, logout } from '../User-login-state-store/user-login-actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private store: Store) { }

  Login() {
    fetch("http://localhost:3000/user/login?username=" + this.username + "&password=" + this.password)
      .then(response => {
        return response.json();
      }
      ).then(data => {
        if (data) {
          alert("Successfully logged in!");
          this.store.dispatch(login({ username: this.username }));
          this.router.navigate(['/']);
        } else {
          alert("Failed to log in. Please try again.");
        }
      });
  }
}
