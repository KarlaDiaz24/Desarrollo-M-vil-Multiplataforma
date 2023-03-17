import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { RealtimeDatabaseService } from '../services/realtime-database.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.page.html',
  styleUrls: ['./temperatura.page.scss'],
})
export class TemperaturaPage implements OnInit {
  public toggleValue: boolean = false;


  data: any;
  data1: any;
  data2: any;
  data3: any;
 /*  public isChecked: boolean = false; */


constructor(private dataService: RealtimeDatabaseService, private alertController: AlertController) { }



  handleToggleClick() {
    this.enviardatos();
    this.presentAlert();
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
    this.dataService.leerDatos('/planta_baja/temperatura').subscribe((data1) => {
      this.data1 = data1;
    });
    this.dataService.leerDatos('/planta_baja/ctrfoco').subscribe((data2) => {
      this.data2 = data2;
      this.toggleValue = this.data2; // Actualiza el valor del toggle
  });
  this.dataService.leerDatos('/planta_baja/humedad').subscribe((data3) => {
    this.data3 = data3;
  });
  }

  enviardatos() {
    if (this.data2 == false) {
      const ruta = '/planta_baja/ctrfoco';
      const datos = true;
      this.dataService.activar_foco(ruta, datos);
    }else if(this.data2 == true) {
      const ruta = '/planta_baja/ctrfoco';
      const datos = false;
      this.dataService.activar_foco(ruta, datos);
    }
  }
/*   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: this.currentAlertMessage,
      buttons: ['OK']
    });
    await alert.present();
    alert.onDidDismiss().then(() => {
      this.currentAlertMessage = 'Esta apagando la bombilla';
      alert.message = this.currentAlertMessage;
    });
  }/*
  currentAlertMessage: string = 'Esta prendiendo la bombilla';
}*/
async presentAlert() {
  let header, message;
  if (this.toggleValue) {
    header = 'Alerta';
    message  = 'La temperatura es inestable, no puede apagar la bombilla';
  } else {
    header = 'Alerta';
    message = 'La temperatura es estale, no puede prender la bombilla';
  }
  const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK']
  });
  await alert.present();
}
}
