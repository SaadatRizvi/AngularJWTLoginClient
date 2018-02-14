import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {CustomMaterialModule} from './core/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import {AppRoutingModule} from './core/app.routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './app.service';
import { AuthService } from './core/auth.service';
import { Interceptor } from './core/app.interceptor';
import { TokenStorage } from './core/token.storage';
import {MatDialogModule} from '@angular/material/dialog';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ UserService, AuthService, TokenStorage, MatDialogModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

