import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../../components/register/register.component';
import { AboutComponent } from '../about/about.component';
import { UppercasePipe } from 'src/app/pipes/uppercase.pipe';
import { ButtonDirective } from 'src/app/directives/button.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RegisterComponent,
    AboutComponent,
    UppercasePipe,
    ButtonDirective,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  heading = 'Welcome to Angular 15 Standalone API session';
}
