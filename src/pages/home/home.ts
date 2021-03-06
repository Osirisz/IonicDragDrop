import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DragulaService]
})
export class HomePage {
  q1 = [];
  q2 = [];

  constructor(private navController: NavController, public alertCtrl: AlertController, private dragulaService: DragulaService) {
    for (var i = 0; i < 20; i++) {
      this.q1.push("1. <" + i + ">");
      this.q2.push("2. <" + i + ">");
    }

    dragulaService.drop.subscribe((value) => {
      let alert = this.alertCtrl.create({
        title: 'Item moved',
        subTitle: value,
        buttons: ['OK']
      });
      alert.present();
    });
  }
}