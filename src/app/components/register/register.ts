import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username: string | undefined;
  password: string | undefined;
  confirm: string | undefined;
  apiResponse: any;
  message: string = 'Please use a strong password'; // default message above form
  messageClass: string = 'alert alert-info';  // blue bg default

  // constructor w/dependencies
  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) {}

  register() {
    // validate => show error in red
    if (this.password !== this.confirm) {
      this.message = 'Passwords do not match';
      this.messageClass = 'alert alert-danger'; 
      this.cdr.detectChanges();
      return;
    }

    // valid inputs, create new user object then pass to auth service to send to server api
    const user = {
      username: this.username,
      password: this.password
    };

    return this.authService.register(user).subscribe({
      next: response => {
        this.apiResponse = response;
        console.log(response);
        this.message = 'Registration Successful';
        this.messageClass = 'alert alert-success';  // change message bg => green
        this.cdr.detectChanges();
      },
      error: error => {
        this.message = error.error?.error || 'Registration Error';
        this.messageClass = 'alert alert-danger';  // change message bg => red
        this.cdr.detectChanges();
      }
    });
  }

}
