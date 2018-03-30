import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

import { AttendancePage } from '../attendance/attendance';
import { SalesPage } from '../sales/sales';
import { StockPage } from '../stock/stock';
import { OffersPage } from '../offers/offers';
import {PerformancePage } from '../performance/performance';
import { UploadimagesPage } from '../uploadimages/uploadimages';
import { HelpPage } from '../help/help';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {


 private rootPage;
  private HomePage;
  private ProfilePage;


private AttendancePage
private SalesPage
private StockPage
private OffersPage
private PerformancePage
private UploadimagesPage
private HelpPage






 
  private sidemenuArray:any;
  private lastmenuItem:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

 this.rootPage = HomePage;
    this.HomePage=HomePage;
    this.ProfilePage = ProfilePage;


 this.AttendancePage = AttendancePage
this.SalesPage = SalesPage
this.StockPage = StockPage
this.OffersPage = OffersPage
this.PerformancePage = PerformancePage
this.UploadimagesPage = UploadimagesPage
this.HelpPage = HelpPage



    this.sidemenuArray=[
    {name:"Home",icon:"home",color:"grayCol",page:this.HomePage},
    {name:"Attendance",icon:"create",color:"light",page:this.AttendancePage},
    {name:"Sales",icon:"cart",color:"light",page:this.SalesPage},
    {name:"Stock",icon:"grid",color:"light",page:this.StockPage},
    {name:"Offers",icon:"briefcase",color:"light",page:this.OffersPage},
    {name:"Performance",icon:"school",color:"light",page:this.PerformancePage},
    {name:"UploadImages",icon:"cloud-upload",color:"light",page:this.UploadimagesPage},
    {name:"HelpPage",icon:"help",color:"light",page:this.HelpPage},
    {name:"Logout",icon:"log-out",color:"light"}];
    this.lastmenuItem=this.sidemenuArray[0];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  logout(){
    this.navCtrl.pop()
  }
  openPage(menu) {
    if(menu.name=="Logout"){
      this.lastmenuItem.color="light";
      this.logout();
    }else{
    this.lastmenuItem.color="light";
    this.rootPage = menu.page;
    menu.color="grayCol"
    this.lastmenuItem=menu;
    }
    
  }

}
