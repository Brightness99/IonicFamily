import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {MainPage} from './pages/main-page/main-page';
import {MyFamiliesPage} from './pages/myfamilies-page/myfamilies-page';
import {ConnectionsPage} from './pages/connections-page/connections-page';
import {SettingsPage} from './pages/settings-page/settings-page';
import {SearchPage} from './pages/search-page/search-page';
import {FamilyPage} from './pages/family-page/family-page';
import {QuickconnectionPage} from './pages/quickconnection-page/quickconnection-page';
import {OptionsPage} from './pages/options-page/options-page';

@App({
    templateUrl: 'build/app.html',
    // http://ionicframework.com/docs/v2/api/config/Config/
    config: {
        platforms: {
            ios: {
                statusbarPadding: false
            }
        }
    },
})
class MyApp {
    static get parameters() {
        return [[IonicApp], [Platform], [MenuController]];
    }

    constructor(app, platform, menu) {
        // set up our app
        this.app = app;
        this.platform = platform;
        this.menu = menu;
        this.initializeApp();

        // set our app's pages
        this.pages = [
            {title: 'Main Page', component: MainPage},
            {title: 'My Families', component: MyFamiliesPage},
            {title: 'Connections', component: ConnectionsPage},
            {title:  'Settings', component: SettingsPage},
            {title: 'Search For A Family', component: SearchPage},
            {title: 'Family Page', component: FamilyPage},
            {title: 'Quick Connection Page', component: QuickconnectionPage},
            {title: 'Viewing Options Page', component: OptionsPage}
        ];

        // make HelloIonicPage the root (or first) page
        this.rootPage = MainPage;
    }

    initializeApp() {
        this.platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    }
}
