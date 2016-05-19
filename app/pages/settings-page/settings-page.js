import {Page, NavController, NavParams, Loading} from 'ionic-angular';
import {Account1Page} from '../account1-page/account1-page';

@Page({
  	templateUrl: 'build/pages/settings-page/settings-page.html'
})
export class SettingsPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }
	constructor(nav, navParams) {
		this.nav = nav;
		this.navParams = navParams;
		this.settingsList = [
			{settingTitle: 'Notifications'},
			{settingTitle: 'Email Address'},
			{settingTitle: 'Password'},
			{settingTitle: 'Zip Code'},
			{settingTitle: 'Help'}
		];
	}

	doSignOut() {

		//do sign out...
		this.presentLoadingDefault();

		this.nav.setRoot(Account1Page);
	}

	presentLoadingDefault() {
        let loading = Loading.create({
            content: 'Please wait...'
        });

        this.nav.present(loading);

        setTimeout(() => {
            loading.dismiss();
        }, 500);
    }
}