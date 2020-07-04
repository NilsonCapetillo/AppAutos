//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Rutas
import { APP_ROUTING } from "./app.routes";

//Servicios
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewsComponent } from './views/views.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { ModalDetallesAutoComponent } from './modal-detalles-auto/modal-detalles-auto.component';
import { ModalAddUpdateComponent } from './modal-add-update/modal-add-update.component';
import { ModalConfirmActionComponent } from './modal-confirm-action/modal-confirm-action.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewsComponent,
    ListComponent,
    TableComponent,
    ModalDetallesAutoComponent,
    ModalAddUpdateComponent,
    ModalConfirmActionComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalDetallesAutoComponent, ModalAddUpdateComponent]
})
export class AppModule { }
