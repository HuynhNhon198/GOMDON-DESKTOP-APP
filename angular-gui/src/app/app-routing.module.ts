import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo, AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { ScanBarcodeComponent } from './_components/pages/scan-barcode/scan-barcode.component';
import { LoginComponent } from './_components/pages/login/login.component';
import { AutoPublishComponent } from './_components/pages/auto-publish/auto-publish.component';

const adminOnly = () => hasCustomClaim('admin');
const quanlyCTVmua = () => hasCustomClaim('quanlyCTVmua');
const quanlykho = () => hasCustomClaim('quanlykho');
const quanlyCTVban = () => hasCustomClaim('quanlyCTVban');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  { path: '', redirectTo: 'scan', pathMatch: 'full' },
  {
    path: 'scan',
    component: ScanBarcodeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'auto-publish',
    component: AutoPublishComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login', component: LoginComponent
  },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
