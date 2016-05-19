import {Page, NavController, NavParams, Slides} from 'ionic-angular';
import {Account2Page} from '../account2-page/account2-page';
import {LoginPage} from '../login-page/login-page';

@Page({
  	templateUrl: 'build/pages/account1-page/account1-page.html'
})
export class Account1Page {
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

	gotoAccount2Page() {
		this.nav.push(Account2Page);
	}

	gotoLogin() {
		this.nav.push(LoginPage);
	}
}