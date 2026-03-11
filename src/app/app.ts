import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // any properties set in this component are accessible in the html view
  protected readonly title: string = 'Welcome to our Library';
}
