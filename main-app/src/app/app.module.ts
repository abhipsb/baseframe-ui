import { COMPILER_OPTIONS, CompilerFactory, Compiler, NgModule } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PluginComponent } from './plugin/plugin.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

export function createCompiler(fn: CompilerFactory): Compiler {     
     return fn.createCompiler();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PluginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: COMPILER_OPTIONS,
    useValue: {},
    multi: true
  },
  {
    provide: CompilerFactory,
    useClass: JitCompilerFactory,
    deps: [COMPILER_OPTIONS]
  },
  {
    provide: Compiler,
    useFactory: createCompiler,
    deps: [CompilerFactory]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
