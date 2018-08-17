import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData = {
    "username": "",
    "password": ""
  }

  // ตัวแปรรับข้อมูลจาก api
  responseData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {

    this.webapi.postData(this.userData,'login.php').then((result)=>{
      this.responseData = result;
      //alert(JSON.stringify(this.responseData));
      if(this.responseData.userData){ // login success
        // แสดงหน้าต่างแจ้งผู้ใช้
        let alert = this.alertCtrl.create({
          title: "สถานะการเข้าระบบ",
          subTitle:"เข้าระบบเรียบร้อยแล้ว",
          buttons: ['Dismiss']
        });
        alert.present();
        // บันทึกข้อมูลลง Local Storage
        localStorage.setItem("userData", this.userData.username);
        // ปิดหน้า login แล้วกลับไปหน้าหลัก
        this.navCtrl.setRoot(TabsPage);
      }else{ // login fail
        // แสดงหน้าต่างแจ้งผู้ใช้ 
        let alert = this.alertCtrl.create({
          title: "สถานะการเข้าระบบ",
          subTitle:"เข้าสู่ระบบไม่สำเร็จ",
          buttons: ['Dismiss']
        });
        alert.present();
      }
    });
  }

}