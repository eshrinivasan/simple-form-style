import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';


import { ThankYouComponent } from './thank-you/thank-you.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-form-style';

  //constructor(private router: Router) {}

  emailFormControl = new FormControl('', [
	  Validators.required,
	  Validators.email,
	]);

	matcher = new MyErrorStateMatcher();


	onSubmitTemplateBased(data) {
      //alert("Entered Email id : " + data.emailid);
      //this.router.navigateByUrl('/user');
      //this.router.navigate(['/thankyou']);
      // this.router.navigateByUrl('/thankyou');
   }
}


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}