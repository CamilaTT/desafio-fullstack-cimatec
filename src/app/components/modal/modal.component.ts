import { CrudService } from './../../pages/dashboard/services/crud.service';
import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {



  constructor(private crudService: CrudService) { }

  ngOnInit(): void { }

  
}
