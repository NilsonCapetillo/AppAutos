import { Component, OnInit, Input } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../autos.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetallesAutoComponent } from '../modal-detalles-auto/modal-detalles-auto.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  closeResult = "";
  page:number;
  pageSize:number;

  constructor(private autoService: AutosService, private modalService: NgbModal){}

  ngOnInit() {
    this.page = 1;
    this.pageSize = 10;

    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }
openModalDetalles(autoSeleccionado: Automovil){
    const modalRef = this.modalService.open(ModalDetallesAutoComponent);
    modalRef.componentInstance.autoSeleccionado = autoSeleccionado;
  
}

}
