import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CockpitComponent } from './products/cockpit/cockpit.component';
import { FormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { NumbersComponent } from './numbers/numbers.component';
import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountService } from './services/account.service';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'blogposts', component: BlogpostsComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CockpitComponent,
    BasicHighlightDirective,
    NumbersComponent,
    UsersComponent,
    AccountsComponent,
    AccountComponent,
    NewAccountComponent,
    TestComponent,
    HomeComponent,
    BlogpostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
