import {Page} from 'ionic-angular';


@Page({
  	templateUrl: 'build/pages/settings-page/settings-page.html'
})
export class SettingsPage {
	constructor() {
		this.settingsList = [
			{settingTitle: 'Notifications'},
			{settingTitle: 'Email Address'},
			{settingTitle: 'Password'},
			{settingTitle: 'Zip Code'},
			{settingTitle: 'Help'}
		];
	}
}