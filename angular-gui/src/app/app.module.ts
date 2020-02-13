import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { environment } from '../environments/environment.prod';

import { ScanBarcodeComponent } from './_components/pages/scan-barcode/scan-barcode.component';
import { AutoPublishComponent } from './_components/pages/auto-publish/auto-publish.component';
import { HeaderComponent } from './_components/header/header.component';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, Configuration, ConfigurationParameters } from './openapi';
import { StatusPipe } from './_pipes/status';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
    basePath: 'https://us-central1-gomdon-74d1a.cloudfunctions.net/api',
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    ScanBarcodeComponent,
    AutoPublishComponent,
    HeaderComponent,
    StatusPipe
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    ApiModule.forRoot(apiConfigFactory),
  ],
  providers: [AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
