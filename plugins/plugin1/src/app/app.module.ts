import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent],
  entryComponents: [HomeComponent],
  providers: [{
    provide: 'plugins',
    useValue: [
      {
        name: 'Home',
        component: HomeComponent
      }
    ]
  }]
})
export class Plugin1Module { }