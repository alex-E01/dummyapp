import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService }from 'src/app/api.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.page.html',
  styleUrls: ['./viewproduct.page.scss'],
})
export class ViewproductPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  
  singleproduct:any=[];
 
  id:any;
  constructor(public activatedRoute:ActivatedRoute , public router:Router, private apiService:ApiService,
    private loadingController:LoadingController)
  {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    console.log("index",this.id);

  }

  ngOnInit() {
    this.getSingleProduct();
  }
  async getSingleProduct(){
    const loading = await this.loadingController.create({message: 'Loading...',});
    loading.present();
    this.apiService.getData("https://dummyjson.com/products/"+this.id).subscribe((res:any,)=>{
      console.log("res:",res);

      this.singleproduct =  res

      console.log(' this.getSingleProduct:', this.singleproduct)
    loading.dismiss();

    });
  }

}
