import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablecontainerComponent } from './tablecontainer/tablecontainer.component';
import { CellblockComponent } from './tablecontainer/cellblock/cellblock.component';
import { CelltemplateDirective } from './tablecontainer/celltemplate/celltemplate.directive'

@NgModule({
  declarations: [
    AppComponent,
    TablecontainerComponent,
    CellblockComponent,
    CelltemplateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
