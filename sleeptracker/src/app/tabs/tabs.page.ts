import { Component } from '@angular/core';
import {
  IonIcon,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { homeOutline, createOutline, fileTrayFullOutline } from 'ionicons/icons';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTab, IonTabBar, IonTabButton, IonTabs],
})
export class TabsPage {

  constructor() { 
    addIcons({homeOutline, createOutline, fileTrayFullOutline})
  }

}
