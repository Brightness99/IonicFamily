import {Page} from 'ionic-angular';


@Page({
  	templateUrl: 'build/pages/myfamilies-page/myfamilies-page.html'
})
export class MyFamiliesPage {
	constructor() {
  		this.familiesList = [
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'},
  			{family_pic: 'img/family1-medium.png', family_title: 'Josh & Robin', location: 'New York, NY'},
  		];
	}

    removeItem(item) {
        for(let i = 0; i < this.familiesList.length; i++) {
            if(this.familiesList[i] == item){
                this.familiesList.splice(i, 1);
            }
        }
    };
}
 