import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { RealtimeDatabaseService } from '../services/realtime-database.service';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.page.html',
  styleUrls: ['./movimiento.page.scss'],
})
export class MovimientoPage implements OnInit{

  data1: any;
  data: any;
  data2: any;

  constructor(private dataService: RealtimeDatabaseService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
    this.dataService.leerDatos('/planta_baja/temperatura').subscribe((data1) => {
      this.data1 = data1;
    });
   /*  firebase.database().ref('/planta_baja/movimiento').on('value', snapshot => {
      this.data2 = snapshot.val();
    }); */
    this.dataService.leerDatos('/planta_baja/movimiento').subscribe((data2) => {
      this.data2 = data2;
    });
  }
}
