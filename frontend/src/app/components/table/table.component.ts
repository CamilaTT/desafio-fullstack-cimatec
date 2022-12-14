import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CrudService } from 'src/app/services/crud.service';
import { VehicleData } from 'src/app/models/vehicles/vehicles-data';
import Swal from 'sweetalert2';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  queryField = new FormControl;

  vehicleData!: VehicleData | any;

  @ViewChild(ModalComponent) modalComponent!: ModalComponent;


  vehicleData$ = this.queryField.valueChanges.pipe(
    map(value => value.trim()),
    filter(value => value.length > 4),
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap((value) => this.crudService.getVehicleData(value))
    )
    .subscribe((value) => {
      if(value.length < 2) this.vehicleData = value
    }
  )

  constructor(private crudService: CrudService) { }


  confirmDelete() {
    Swal.fire(
      {
        title: 'Esta ação não poderá ser desfeita!',
        text: `Deseja realmente excluir o veículo de código: ${this.vehicleData[0].vin}?`,
        showDenyButton: true,
        denyButtonText: 'Não',
        confirmButtonText: 'Sim, excluir',
        denyButtonColor: 'rgb(169,169,169)',
        confirmButtonColor: 'rgb(255,0,0)',
        icon: 'warning'
      }).then(result => {
          if(result.value) {
            this.crudService.deleteVehicleData(this.vehicleData[0].id).subscribe(result => {
              this.vehicleData[0] = result
            })
            Swal.fire(
              {
                title: 'Registro excluído com sucesso!',
                icon: 'success',
                confirmButtonColor: '#00274E'
              }
            )
          } else {
            Swal.fire(
              {
                title: 'Exclusão cancelada.',
                confirmButtonColor: '#00274E'
              }
            )
          }
      })
  }

  transferReturnedVehicleData() {
    this.modalComponent.vehicleData = this.vehicleData[0]
    this.modalComponent.ngOnInit()
  }
}
