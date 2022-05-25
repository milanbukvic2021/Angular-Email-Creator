import { NgModule } from '@angular/core';
import { RoutesRecognized } from '@angular/router';
//import { Routes, RouterModule } from '@angular/router';
//import { Routes, RouterModule } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

//import { AuthGuard } from './auth/auth.guard';
//import { AuthGuard } from './auth/auth.guard';
import { AuthGuard } from './auth/auth.guard';

//const routes: Routes = [
//  {
//    path: 'inbox',
//    canLoad: [AuthGuard],
//    loadChildren: () =>
//      import('./inbox/inbox.module').then((mod) => mod.InboxModule),
//  },
//];

//const routes: Routes = [
//  {
//    path: 'inbox',
//    canLoad: [AuthGuard],
//    loadChildren: () =>
//      import('./inbox/inbox.module').then((mod) => mod.InboxModule),
//  },
//];

//const routes: Routes = [
//  {
//    path: 'inbox',
//    canLoad: [AuthGuard],
//    loadChildren: () =>
//      import('./inbox/inbox.module').then((mod) => mod.InboxModule),
//  },
//];

//const routes: Routes = [
//  {
//    path: 'inbox',
//    canLoad: [AuthGuard],
//    loadChildren: () =>
//      import('./inbox/inbox.module').then((mod00) => mod00.InboxModule),
//  },
//];

const routes: Routes = [
  {
    path: 'inbox',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./inbox/inbox.module').then((mod) => mod.InboxModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
