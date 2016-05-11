import {Page} from 'ionic-angular';


@Page({
  	templateUrl: 'build/pages/main-page/main-page.html'
})
export class MainPage {
  	constructor() {

  		this.familyCardList = [
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'},
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'},
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'},
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'},
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'},
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'}
  		];
  	}
}
