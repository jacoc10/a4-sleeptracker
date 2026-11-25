import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { StorageService } from './storage';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];
	public ready: Promise<void>;

	constructor(private storageService: StorageService) {
		this.ready = this.loadsave();
	}

	private addDefaultData() {
		var goToBed = new Date();
		goToBed.setDate(goToBed.getDate() - 1); //set to yesterday
		goToBed.setHours(1, 3, 0); //1:03am
		var wakeUp = new Date();
		wakeUp.setTime(goToBed.getTime() + 8 * 60 * 60 * 1000); //Sleep for exactly eight hours, waking up at 9:03am
		this.logOvernightData(new OvernightSleepData(goToBed, wakeUp)); // add that person was asleep 1am-9am yesterday
		var sleepinessDate = new Date();
		sleepinessDate.setDate(sleepinessDate.getDate() - 1); //set to yesterday
		sleepinessDate.setHours(14, 38, 0); //2:38pm
		this.logSleepinessData(new StanfordSleepinessData(4, sleepinessDate)); // add sleepiness at 2pm
		goToBed = new Date();
		goToBed.setDate(goToBed.getDate() - 1); //set to yesterday
		goToBed.setHours(23, 11, 0); //11:11pm
		wakeUp = new Date();
		wakeUp.setTime(goToBed.getTime() + 9 * 60 * 60 * 1000); //Sleep for exactly nine hours
		this.logOvernightData(new OvernightSleepData(goToBed, wakeUp));
	}

	private async save() {
		await this.storageService.set('OvernightData', SleepService.AllOvernightData)
		await this.storageService.set('SleepinessData', SleepService.AllSleepinessData)
		console.log("Saved overnight:", SleepService.AllOvernightData);
    	console.log("Saved sleepiness:", SleepService.AllSleepinessData);
	}


	private async loadsave() {
		const overnightData = await this.storageService.get('OvernightData');
		const sleepinessData = await this.storageService.get('SleepinessData');

		if (overnightData != null) {
			for (const data of overnightData) {
				const record =  new OvernightSleepData(new Date(data.sleepStart),new Date(data.sleepEnd))
            	record.loggedAt = new Date(data.loggedAt);
            	SleepService.AllOvernightData.push(record);
            	SleepService.AllSleepData.push(record);
			
			}
		}
		if (sleepinessData != null) {
			for (const data of sleepinessData) {
				const record = new StanfordSleepinessData(data.loggedValue, new Date(data.loggedAt))
				SleepService.AllSleepinessData.push(record);
				SleepService.AllSleepData.push(record);
			}
		}
	}

	public async logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
		await this.save();
	}

	public async logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
		await this.save();
	}

	
}
