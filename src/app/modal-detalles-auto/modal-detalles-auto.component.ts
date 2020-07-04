import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';
import { AutosService } from '../autos.service';
@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-detalles-auto.component.html',
  styleUrls: ['./modal-detalles-auto.component.css']
})

export class ModalDetallesAutoComponent {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  constructor(private autoService: AutosService, public modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit() {

    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }
  onselect(auto: Automovil) {
    this.autoSeleccionado = auto;
  }
}