import {Page, NavController, NavParams} from 'ionic-angular';
import {MyFamiliesPage} from '../myfamilies-page/myfamilies-page'
import {ConnectionsPage} from '../connections-page/connections-page'
import {SearchPage} from '../search-page/search-page'

@Page({
  	templateUrl: 'build/pages/main-page/main-page.html'
})
export class MainPage {
    static get parameters() {
        return [[NavController]];
    }
  	constructor(nav, navParams) {
  		this.nav = nav;
  		this.familyCardList = [
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'},
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'},
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'},
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'},
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'},
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'}
  		];
  		
  	}
    gotoMyFamiliesPage() { 
    	this.nav.setRoot(MyFamiliesPage);
	}

	gotoConnectionsPage() {
		this.nav.setRoot(ConnectionsPage);
	}

    gotoSearchPage() {
        this.nav.setRoot(SearchPage);
    }

}
