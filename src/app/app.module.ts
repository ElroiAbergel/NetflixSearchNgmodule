import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './Store/reducers/login.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../../environment';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    StoreModule.forRoot({login: loginReducer}),

  ],
  providers: [
    provideClientHydration(),
    provideStoreDevtools({ maxAge: 25, logOnly: environment.production })

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
