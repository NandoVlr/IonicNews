import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonApp, IonContent, IonHeader, IonList, IonMenu, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, RouterModule, CommonModule, IonList, IonContent, IonTitle, IonToolbar, IonHeader, IonMenu],
})
export class AppComponent {
  constructor() {}
}
