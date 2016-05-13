import {Page} from 'ionic-angular';


@Page({
  	templateUrl: 'build/pages/search-page/search-page.html'
})
export class SearchPage {
	constructor() {
		this.searchList = [
			{searchTitle: 'Family Location'},
			{searchTitle: 'Families Open To'},
			{searchTitle: 'Family Ethnicity'},
			{searchTitle: 'Family Type'}
		];
	}
}