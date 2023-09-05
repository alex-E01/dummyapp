import { Component, OnInit } from '@angular/core';
import { WordpressapiService } from '../wordpressapi.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  post_name: any;
  post_content: any;


  constructor(private wordpressapiService: WordpressapiService, private loadingController: LoadingController,
    private toastController:ToastController,private router:Router,private activatedRoute:ActivatedRoute) {
      
     }

  ngOnInit() {
  }

  async addpost(position:'bottom') {
    const loading = await this.loadingController.create({ message: 'Loading...', });
    loading.present();

    if (this.post_name != null && this.post_content != null) {
      let savedata: any = {
        post_title: this.post_name,
        post_content: this.post_content
      }
      this.wordpressapiService.senddata("set_myarticle", savedata).subscribe(async (res: any) => {
        console.log(res);
        loading.dismiss();
        this.post_name = '';
        this.post_content = '';
        const toast = await this.toastController.create({
          message: 'Hello World!',
          duration: 1500,
          position: position,
        });
        await toast.present();
        this.router.navigateByUrl('/wordpress');
      });
    } else {
      console.log('Invalid');
    }


  }

}
