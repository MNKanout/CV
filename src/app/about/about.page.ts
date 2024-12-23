import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonIcon,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonCard,
  IonImg,
  IonGrid,
  IonRow,
  IonCol
 } from '@ionic/angular/standalone';
 import { addIcons } from 'ionicons';

 import { 
  call,
  mailOpen,
  logoGithub,
  logoLinkedin,
 } from 'ionicons/icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonImg,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonListHeader,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ]
})
export class AboutPage implements OnInit {

  constructor() {
    addIcons({ 
      call,
      mailOpen,
      logoGithub,
      logoLinkedin,
     });
  }

  ngOnInit() {
  }

}
