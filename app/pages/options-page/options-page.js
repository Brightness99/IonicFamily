import {Page, NavController, NavParams} from 'ionic-angular';
import {QuickconnectionPage} from '../quickconnection-page/quickconnection-page';


@Page({
  	templateUrl: 'build/pages/options-page/options-page.html'
})
export class OptionsPage {
    static get parameters() {
        return [[NavController]];
    }
	constructor(nav, navParams) {
        this.nav = nav;
		this.optionsList = [
			{optionTitle: 'QuickConnect', subTitle: 'View Random Families'},
			{optionTitle: 'All Families', subTitle: ''},
			{optionTitle: 'Families In My State', subTitle: ''},
			{optionTitle: 'Advanced Search', subTitle: ''}
		];
	}

	gotoPages(item) {
		if(item == this.optionsList[0]) {
			this.nav.push(QuickconnectionPage);
		}
		else if(item == this.optionsList[1]) {

		} else if(item == this.optionsList[2]) {

		} else if(item == this.optionsList[3]) {

		}

	}

}