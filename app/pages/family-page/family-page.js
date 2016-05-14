import {Page, NavController, NavParams, Slides} from 'ionic-angular';
import {ViewChild} from 'angular2/core';
import {ConnectionsPage} from '../connections-page/connections-page'
import {MainPage} from '../main-page/main-page'

@Page({
  	templateUrl: 'build/pages/family-page/family-page.html'
})
export class FamilyPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }

	constructor(nav, navParams) {
		this.nav = nav;
        this.navParams = navParams;
	
	}

	gotoConnectionsPage() {
		this.nav.setRoot(ConnectionsPage);
	}

	gotoMainPage() {
		this.nav.setRoot(MainPage);
	}
}