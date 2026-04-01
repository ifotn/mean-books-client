import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {
  username: string | null = null;

  constructor (private authService: AuthService) { }

  ngOnInit(): void {
    // check global username in authservice so we know what links to show / hide
    this.authService.username.subscribe((username) => {
      // copy global username to a local var so we can evaluate in ui
      this.username = username;
    });
  }
}
