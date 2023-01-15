import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
      CommonModule,
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      TodoModule,
      MatInputModule,
      MatButtonModule,
      MatFormFieldModule,
      MatSnackBarModule,
      SharedModule
    ]
})
export class AppModule { }
