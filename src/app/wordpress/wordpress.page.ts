import { Component, OnInit } from '@angular/core';
import { WordpressapiService } from '../wordpressapi.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {

  apidata: any = {};
  myarticle: any = [];

  constructor(private wordpressapiService: WordpressapiService,
    private router: Router, private loadingController: LoadingController,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.onclick();
    this.article();
  }

  onclick() {
    //getwordpress api
    this.wordpressapiService.getdata("get_myposts").subscribe((res: any) => {
      console.log("res:", res);

      this.apidata = res;

      console.log(' my posts:', this.apidata);

    });


  }
  async article() {
    const loading = await this.loadingController.create({ message: 'Loading...', });
    loading.present();
    this.wordpressapiService.getdata("get_myarticle").subscribe((res: any) => {

      console.log("article", res);

      this.myarticle = res;
      console.log('myartile', this.myarticle);
      loading.dismiss();
    });


  }

  async delete(post_id: any) {

    let idsave: any = {
      ID: post_id
    }
    console.log(idsave);
    const loading = await this.loadingController.create({ message: 'Deleting...', });
    loading.present();
    this.wordpressapiService.senddata("delete_myposts", idsave).subscribe((res: any) => {

      console.log(res);
      loading.dismiss();
      this.article();


    });
  }
  
  edit(item: any) {
    const navigationExtras = {
      queryParams: {
        post: JSON.stringify(item),
      }
    };
    this.router.navigate(['/edit'],navigationExtras);
    

  }

}
