
import { Component } from '@angular/core';
import { 
  RouterLink,
  RouterLinkActive,
 } from '@angular/router';
import { 
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
 } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp,
  document,
  documentOutline,
  documentSharp,
  person,
  personAddOutline,
  personSharp,
  bulb,
  bulbSharp,
 } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  public appPages = [
    {title: 'Profil', url: 'profile', icon: 'person'},
    { title: 'Kompetanse', url: 'home', icon: 'document' },
    { title: 'Ferdigheter', url: 'skills', icon: 'bulb' },
  ];
  constructor() {
    addIcons({ 
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline, 
      bookmarkSharp,
      document,
      documentOutline,
      documentSharp,
      person,
      personAddOutline,
      personSharp,
      bulb,
      bulbSharp,
     });
  }
}
