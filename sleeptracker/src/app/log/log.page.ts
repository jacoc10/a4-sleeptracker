import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonPopover, IonDatetime, IonDatetimeButton, IonButtons, IonButton, IonModal, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon,} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { flashOffOutline, bedOutline} from 'ionicons/icons';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
  standalone: true,
  imports: [IonPopover, IonDatetime, IonDatetimeButton, IonButtons, IonButton, IonModal, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle]
})
export class LogPage implements OnInit {

  @ViewChild('sleepinessModal') modal!: IonModal;
  
  scale = [1, 2, 3, 4, 5, 6, 7];
  selectednum: null | number = null;
  
  cancel() {this.modal.dismiss(null, 'cancel')}

  async confirm() {
    if (this.selectednum == null) {return;}
    const record = new StanfordSleepinessData(this.selectednum);
    await this.sleepService.logSleepinessData(record);
    this.modal.dismiss(null, 'confirm');
  }

  didDismissSleepy() {
    this.selectednum = null;
  }

  @ViewChild('overnightModal') overnightmodal!: IonModal;

  currentTime = new Date()
  current = this.currentTime.toISOString();
  
  bedtime = this.current;
  waketime = this.current;
  
  cancelovernight() {this.overnightmodal.dismiss(null, 'cancel')}

  async confirmovernight() {
    const record = new OvernightSleepData(new Date(this.bedtime), new Date(this.waketime));
    await this.sleepService.logOvernightData(record);
    this.overnightmodal.dismiss(null, 'confirm');
  }

  didDismissOvernightSleep() {
    this.bedtime = this.current;
    this.waketime = this.current;
  }

  constructor(private sleepService: SleepService) {
    addIcons({flashOffOutline, bedOutline})
   }

  ngOnInit() {
  }

}
