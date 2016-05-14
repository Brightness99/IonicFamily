import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  	templateUrl: 'build/pages/message-page/message-page.html'
})
export class MessagePage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }
	constructor(nav, navParams) {
		this.nav = nav;
        this.navParams = navParams;
        this.title = this.navParams.get('title');
		this.messageList = [
			{type: 'recived', picture_url: 'img/family1-medium.png', message: 'Yes, We are open to traveling to see you and your family for some of the major holidays during the year.'},
			{type: 'sent', picture_url: 'img/family1-medium.png', message: 'Sounds good. We usually travel fro Xmas btw'},
			{type: 'recived', picture_url: 'img/family1-medium.png', message: 'We\'re totally open minded about it'}
		];
	}
}