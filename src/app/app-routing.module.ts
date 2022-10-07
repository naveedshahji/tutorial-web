import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BookmarkComponent } from './bookmarks/bookmark/bookmark.component';
import { HomeComponent } from './home/home.component';
import { AddDealComponent } from './deal/add-deal/add-deal.component';
import { ListDealsComponent } from './deal/list-deals/list-deals.component';

const routes: Routes = [
  {
    path: 'bookmarks',
    component: BookmarkComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'add',
    component: AddDealComponent,
  },
  {
    path: 'list',
    component: ListDealsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
