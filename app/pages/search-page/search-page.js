import {Page, NavController, NavParams} from 'ionic-angular';
import {OptionsPage} from '../options-page/options-page'

@Page({
  	templateUrl: 'build/pages/search-page/search-page.html'
})
export class SearchPage {
    static get parameters() {
        return [[NavController]];
    }
	constructor(nav, navParams) {
  		this.nav = nav;
		this.searchList = [
			{searchTitle: 'Family Location'},
			{searchTitle: 'Families Open To'},
			{searchTitle: 'Family Ethnicity'},
			{searchTitle: 'Family Type'}
		];
	}

    gotoOptionsPage() {
        this.nav.setRoot(OptionsPage);
    }
}