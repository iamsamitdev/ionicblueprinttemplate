import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, Platform } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  userDetail: any;
  loginStatus: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App,
    public alertCtrl: AlertController,
    public platform: Platform) {

      // ตรวจเช็คว่ามีตัวแปร userData อยู่ใน local storage หรือไม่
      let data = localStorage.getItem('userData');
      if (data == null) {
        this.userDetail = "ผู้เยี่ยมชม";
        this.loginStatus = false;
      } else {
        this.userDetail = data;
        this.loginStatus = true;
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }


  showLogin() {
    this.app.getRootNav().push(LoginPage);
  }

  logout() {
    localStorage.removeItem('userData');
    this.navCtrl.setRoot(TabsPage);
  }

  showRegister() {
    this.app.getRootNav().push(RegisterPage);
  }

}
