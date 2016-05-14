import {Page, NavController, NavParams, Slides} from 'ionic-angular';
import {ViewChild} from 'angular2/core';
import {ConnectionsPage} from '../connections-page/connections-page'

@Page({
  	templateUrl: 'build/pages/quickconnection-page/quickconnection-page.html'
})
export class QuickconnectionPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }

	constructor(nav, navParams) {
		this.nav = nav;
        this.navParams = navParams;
	}

	closePage() {
		this.nav.pop();
	}

	gotoConnectionsPage() {
		this.nav.setRoot(ConnectionsPage);
	}
}