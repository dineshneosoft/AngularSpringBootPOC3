import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 10 Spring Boot CRUD Full Stack App';
getValue()
{
  return "get function data"
}
}
