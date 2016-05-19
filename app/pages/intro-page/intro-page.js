import {Page, NavController, NavParams, Slides} from 'ionic-angular';
import {Account1Page} from '../account1-page/account1-page';
import {LoginPage} from '../login-page/login-page';

@Page({
  	templateUrl: 'build/pages/intro-page/intro-page.html'
})
export class IntroPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }

	constructor(nav, navParams) {
		this.nav = nav;
        this.navParams = navParams;
		this.thumnailList1 = [];
		this.thumnailList2 = [];
		this.thumnailList3 = [];
		for(let i = 1; i < 31; i++) {
			var obj = new Object({picture_url: 'img/family' + i + '-small-icon.png'});
			if (i < 11)
				this.thumnailList1.push(obj);
			else if (i < 21)
				this.thumnailList2.push(obj);
			else
				this.thumnailList3.push(obj);
		
		}
	}

	gotoAccount1Page() {
		this.nav.push(Account1Page);
	}

	gotoLogin() {
		this.nav.push(LoginPage);
	}

}