// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import {
  NgModule,
  Component,
  Pipe,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  NgForm

} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SignUpModel } from './SingnUpModel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

  langs: string[] = [
      'English',
      'French',
      'German',
  ];
  constructor(private router: Router) { }
 
  public model = new SignUpModel();
  @ViewChild('myform') form: any;

  register(myform: NgForm) {
      if (this.form.valid) {
          console.log('Successful registration');
          console.log(myform);
          //this.form.reset();
         
          this.router.navigate(['thanks']);
          debugger
      }
  }
  
  //myform: FormGroup;
  //firstName: string='';
  //lastName: string = '';
  //email: string = '';
  //password: string = '';
  //cpassword: string = '';
  //language: string = '';

ngOnInit() {

}


}
