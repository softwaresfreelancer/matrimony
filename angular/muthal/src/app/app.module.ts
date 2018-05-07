import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatCard, MatCardModule, MatInputModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { UserInfoService } from './services/userInfo.service';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { ViewInfoComponent } from './home/view-info/view-info.component';
import { ContactInfoComponent } from './home/view-info/contact-info/contact-info.component';
import { RelativeInfoComponent } from './home/view-info/relative-info/relative-info.component';
import { MainComponent } from './login/main/main.component';
import { AppHeaderComponent } from './common/app-header/app-header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    FilterPipe,
    ProfileComponent,
    ContactInfoComponent,
    ConvertToSpacesPipe,
    ViewInfoComponent,
    RelativeInfoComponent,
    MainComponent,
    AppHeaderComponent

  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule,MatMenuModule,MatToolbarModule,
    FormsModule, MatFormFieldModule, MatDatepickerModule

  ],
  providers: [
    UserInfoService, UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
