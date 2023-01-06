import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form = this.fb.group({
    email: new FormControl<string>(null, [
      Validators.required,
      ValidationService.emailValidator()
    ]),
    password: new FormControl<string>(null, [
      Validators.required,
      Validators.minLength(8),
      ValidationService.passwordValidator()
    ])
  });

  constructor(
    private fb: FormBuilder,
    private authServise: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router) {

  }

  async login(): Promise<void> {
    if(this.form.valid){
      await this.authServise.login(this.form.value.email, this.form.value.password)
        .then(() => {
          this.router.navigate(['todo']);
        })
        .catch(() => {
          this.openSnackBar();
        });
    }
  }

  private openSnackBar() {
    this._snackBar.open('Invalid email or password', null, {
      verticalPosition: 'top',
      duration: 3 * 1000
    })
  }


}
