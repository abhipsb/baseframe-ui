// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    // BrowserModule,
    // AppRoutingModule,
    CommonModule
  ],
  entryComponents: [HomeComponent],
  providers: [{
    provide: 'plugins',
    useValue: [
      {
        name: 'Home',
        component: HomeComponent
      }
    ]
  }],
  // bootstrap: [AppComponent]
})
export class AppModule { }
