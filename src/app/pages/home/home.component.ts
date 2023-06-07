import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../../components/register/register.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  heading = 'Welcome to Angular 15 Standalone API session';
}
