import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { HomeUserComponent } from './Components/home-user/home-user.component';
import { HomeCompanyComponent } from './Components/home-company/home-company.component';
import { MorseComponent } from './Components/morse/morse.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { RegisterCompanyComponent } from './Components/register-company/register-company.component';
import { RegisterUserComponent } from './Components/register-user/register-user.component';
import { UpdateDataCompanyComponent } from './Components/update-data-company/update-data-company.component';
import { UpdateDataUserComponent } from './Components/update-data-user/update-data-user.component';
import { OffersComponent } from './Components/offers/offers.component';
import { RecruiterComponent } from './Components/recruiter/recruiter.component';
import { NotificationCompanyComponent } from './Components/notification-company/notification-company.component';
import { NotificationUserComponent } from './Components/notification-user/notification-user.component';
import { ProfileCompanyComponent } from './Components/profile-company/profile-company.component';
import { ProfileUserComponent } from './Components/profile-user/profile-user.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { PaymentCompanyComponent } from './Components/payment-company/payment-company.component';
import { CardsUserComponent } from './Components/cards-user/cards-user.component';
import { CardsCompanyComponent } from './Components/cards-company/cards-company.component';

import { SearcherComponent } from './Components/searcher/searcher.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { OfferExamComponent } from './Components/offer-exam/offer-exam.component';

const routesApp: Routes = [
  {path: '', component: HomeComponent},
  {path: 'homeUser', component: HomeUserComponent},
  {path: 'homeCompany', component: HomeCompanyComponent},
  {path: 'homeCompany', component: LoginComponent},
  {path: 'morse', component: MorseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ressetPassword', component: ResetPasswordComponent},
  {path: 'registerUser', component: RegisterUserComponent},
  {path: 'registerCompany', component: RegisterCompanyComponent},
  {path: 'updateCompany', component: UpdateDataCompanyComponent},
  {path: 'updateUser', component: UpdateDataUserComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'recruiter', component: RecruiterComponent},
  {path: 'notificationCompany', component: NotificationCompanyComponent},
  {path: 'notificationUser', component: NotificationUserComponent},
  {path: 'profileUser', component: ProfileUserComponent},
  {path: 'profileCompany', component: ProfileCompanyComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'paymentCompany', component: PaymentCompanyComponent},
  {path: 'cardsUser', component: CardsUserComponent},
  {path: 'cardsCompany', component: CardsCompanyComponent},

  {path: 'categories', component: CategoriesComponent},
  {path: 'offer-exam', component: OfferExamComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HomeUserComponent,
    MorseComponent,
    SearcherComponent,
    CategoriesComponent,
    OfferExamComponent,
    HomeCompanyComponent,
    LoginComponent,
    UpdateDataCompanyComponent,
    UpdateDataUserComponent,
    NotificationCompanyComponent,
    NotificationUserComponent,
    OffersComponent,
    ResetPasswordComponent,
    PaymentComponent,
    PaymentCompanyComponent,
    ProfileCompanyComponent,
    ProfileUserComponent,
    RecruiterComponent,
    RegisterCompanyComponent,
    RegisterUserComponent,
    CardsUserComponent,
    CardsCompanyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
