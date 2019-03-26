import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  { path: 'search/:login', component: SearchComponent},
  { path: 'search', component: SearchComponent},
  { path: 'user/:login', component: UserComponent},
  {
    path: '**',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

