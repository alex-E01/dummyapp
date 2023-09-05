import { Component, OnInit } from '@angular/core';
import { ApiService }from 'src/app/api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products:any=[];

  constructor(
    private apiService : ApiService ,private loadingController:LoadingController
  ) {
 
  }

  ngOnInit(){
   
  }


  ionViewWillEnter(){
    this.getProduct();
  }

  async getProduct(){
    const loading = await this.loadingController.create({message: 'Loading...',});
    loading.present();
    this.apiService.getData("https://dummyjson.com/products").subscribe((res:any)=>{
      console.log("res:",res);

      this.products =  res.products


      console.log(' this.products:', this.products);
    loading.dismiss();

    });
  }

}
