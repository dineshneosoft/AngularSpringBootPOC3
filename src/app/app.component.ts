import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Details';
  name="Dinesh Bind";
getValue()
{
  return "get function data"
}
}
