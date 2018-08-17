import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
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
    public camera: Camera,
    public barcodeScanner: BarcodeScanner,
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

  Logout() {
    localStorage.removeItem('userData');
    this.navCtrl.setRoot(TabsPage); // reload tab
  }

  showRegister() {
    this.app.getRootNav().push(RegisterPage);
  }

  // ฟังก์ชันเรียกกล้องถ่ายรูปบนมือถือ
  takeCamera(){
    if(!this.platform.is('core')){
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        
        this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
        // Handle error
        });
      }
  }

  // ฟังก์ชันสแกนบาร์โค๊ด / qr code
  Scanbarcode()
  {
    if(!this.platform.is('core')){
        this.barcodeScanner.scan().then(barcodeData => {
          console.log('Barcode data', barcodeData);
          alert(JSON.stringify(barcodeData));
        }).catch(err => {
            console.log('Error', err);
        });
    }
  }

}
