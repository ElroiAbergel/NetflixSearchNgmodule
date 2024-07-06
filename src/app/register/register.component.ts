import { Component } from '@angular/core';
import { Validation } from '../Validators/validate';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userNameAvailable: boolean = false;
  username: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  checkbox: boolean = false;
  constructor(private router: Router) { }
  async SignUp() {
    let httpBody = JSON.stringify({
      username: this.username,
      password: this.password,
    });
    let validation = new Validation();
    if (this.checkbox) {
      if (this.username, this.password, this.passwordConfirmation)
        if (validation.user(this.username) && validation.password(this.password)) {
          if (validation.rePassword(this.password, this.passwordConfirmation)) {
            await fetch("http://localhost:3000/user/isUsernameAvailable?username=" + this.username)
              .then(response => response.json())
              .then(data => {
                this.userNameAvailable = data;
              });
            if (this.userNameAvailable) {
              fetch("http://localhost:3000/user", {
                method: 'POST', headers: {
                  'Content-Type': 'application/json',
                }, body: httpBody
              })
                .then(response => {
                  if (response.status === 201) {
                    alert("Successfully registered! Please log in.")
                    this.router.navigate(['/login']);
                  } else {
                    console.log('Failed');
                  }
                });
            }
            else {
              alert("Username already exists");
            }
          }
          else {
            alert("Passwords do not match");
          }
        }
        else {
          alert("Username must be between 3 and 20 characters.\nPassword must be between 8 and 20 characters and contain at least one uppercase letter, one lowercase letter, and three numbers.");
        }
    }
    else {
      alert("Please mark the checkbox to continue");
    }
  }
}

