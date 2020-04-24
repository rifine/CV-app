import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate =
    [
      {
        title : 'Personal Profile',
        url   : '/personal-profile',
        icon  : 'person-sharp'
      },
      {
        title : 'Technical Skills',
        url   : '/technical-skills',
        icon  : 'build-outline'
      },
      {
        title : 'Soft Skills',
        url   : '/soft-skills',
        icon  : 'body-outline'
      },
      {
        title : 'Personal Project',
        url   : '/personal-project',
        icon  : 'bulb-outline'
      },
      {
        title : 'Team Project',
        url   : '/team-project',
        icon  : 'people-outline'
      },
      {
        title : 'Extra Curriculum activities',
        url   : '/extra-curriculum-activities',
        icon  : 'heart'
      }, {
        title : 'Contact Information',
        url   : '/contact-information',
        icon  : 'call-outline'
      },
      {
        title : 'Logout',
        url   : '/login',
        icon  : 'log-out-outline'
      },
    ];
  }
}
