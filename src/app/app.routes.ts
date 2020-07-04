import { RouterModule, Routes } from "@angular/router";
import { Component } from '@angular/core';
import {ListComponent} from './list/list.component';
import {TableComponent} from './table/table.component';

const APP_ROUTES: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'table', component: TableComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];  

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);