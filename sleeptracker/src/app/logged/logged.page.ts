import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonSegment, IonLabel, IonSegmentButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.page.html',
  styleUrls: ['./logged.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonLabel, IonSegment, IonSegmentButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class LoggedPage implements OnInit {

  selected = "sleepiness";

  constructor(private sleepservice: SleepService) { }

  get sleepinessData() {
    return SleepService.AllSleepinessData;
  }

  get overnightData() {
    return SleepService.AllOvernightData;
  }

  ngOnInit() {
  }

}
