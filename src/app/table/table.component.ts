import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Automovil } from '../models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import {ModalConfirmActionComponent} from '../modal-confirm-action/modal-confirm-action.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  closeResult = "";
  page:number;
  pageSize:number;
  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }
  openModalEditar(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent);
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar'; 

    modalRef.result.then(
      (auto) => {
        this.autoService.updateAutos(auto).subscribe(value =>{
          this.ngOnInit();
        });
      },
      (reason) => {
        console.log(reason)
      }
    )
  }
  openModalAgregar(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent);
    modalRef.componentInstance.accion = 'Agregar';
    modalRef.result.then(
      (auto) => {
        this.autoService.AddAuto().subscribe(response => console.log(response)); 
      },
      (reason) =>{
        console.log(reason)
      }
    );
  }

  openModalConfirmarEliminar(auto:Automovil){
    const modalRef = this.modalService.open(ModalConfirmActionComponent)
    modalRef.componentInstance.auto = auto;
    modalRef.result.then(
      (autoTemp) => {
        this.autoService.eliminarAutos(autoTemp).subscribe(response =>{
        })
      },
      (reason) => {
        console.log(reason)
      }
    )

  }
}
