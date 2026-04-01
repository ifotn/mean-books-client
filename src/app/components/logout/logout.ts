import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout implements OnInit {

  // dependencies
  constructor(private authService: AuthService, private router: Router) {}

  // method that runs as soon as component instatiates
  ngOnInit(): void {
    // call service to log user out, then redirect to home
    this.authService.logout().subscribe(response => {
      // clear global username from authService
      this.authService.clearUsername();
      this.router.navigate(['/']);
    });
  }
}
