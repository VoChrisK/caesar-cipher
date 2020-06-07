import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EncryptComponent } from './encrypt/encrypt.component';
import { RouterModule } from '@angular/router';
import { QueryComponent } from './query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    EncryptComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: EncryptComponent }
    ])
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
