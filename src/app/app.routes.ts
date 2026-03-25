import { Routes } from '@angular/router';
import { Books } from './components/books/books';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Home } from './components/home/home';

// routes array lists all the url mapping to corresponding components
// paths do NOT include leading slash /
export const routes: Routes = [
    { path: 'books', title: 'Books', component: Books },
    { path: 'register', title: 'Register', component: Register },
    { path: 'login', title: 'Login', component: Login },
    { path: '', title: 'Home', component: Home }
];
