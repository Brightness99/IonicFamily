import {Page, NavController, NavParams} from 'ionic-angular';
import {MessagePage} from '../message-page/message-page';
import {OptionsPage} from '../options-page/options-page'

@Page({
  	templateUrl: 'build/pages/connections-page/connections-page.html'
})
export class ConnectionsPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }
	constructor(nav, navParams) {
		this.nav = nav;
        this.navParams = navParams;

  		this.familiesList = [  			
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', message: 'Yes. We are open to traveling to see you and your family for some of the major holidays during the year.', time:'9:02 PM'},
        	{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', message: 'Are you very religious? I want my child raised by a family that is religious. But I couldn’t tell if you were.', time: 'Saturday'}
  		];
	}

	gotoMessagePge(item) { 
        this.nav.push(MessagePage, {title: item.family_title});
    }

    gotoOptionsPage() {
        this.nav.setRoot(OptionsPage);
    }
}
 