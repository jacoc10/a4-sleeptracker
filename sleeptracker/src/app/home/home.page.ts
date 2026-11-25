import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonCard, IonIcon, IonContent, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle } from '@ionic/angular/standalone';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { addIcons } from 'ionicons';
import { flashOffOutline, bedOutline} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCardTitle, IonHeader, IonToolbar, IonTitle, IonCard, IonIcon, IonContent, IonCardContent, IonCardHeader, IonCardSubtitle],
})
export class HomePage {
  constructor(public sleepService:SleepService) {
		addIcons({flashOffOutline, bedOutline})
	}

	ngOnInit() {
		console.log(this.allSleepData);
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}
	
	get numOfSleepinessRecords() {
		return SleepService.AllSleepinessData.length;
	}

	get numOfOvernightRecords() {
		return SleepService.AllOvernightData.length;
	}

	get numOfRecords() {
		return SleepService.AllSleepinessData.length + SleepService.AllOvernightData.length;
	}
}
