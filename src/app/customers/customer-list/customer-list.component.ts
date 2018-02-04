import { Component, OnInit } from '@angular/core';
import {ExportsByModuleService} from '../../core/services/exports-by-module.service';
import {ExportsByRootsService} from '../../core/services/exports-by-roots.service';
import {ExportsByClildService} from '../../core/services/exports-by-child.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(public ebm: ExportsByModuleService, public ebr: ExportsByRootsService, public ebc: ExportsByClildService) { }

  ngOnInit() {
  }

}
