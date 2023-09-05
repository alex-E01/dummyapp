import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { WordpressapiService } from '../wordpressapi.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  post_name: any;
  post_content: any;
  post:any = [];
  id:any;

  constructor(private wordpressapiService: WordpressapiService, private loadingController: LoadingController,
    private toastController:ToastController,private router:Router,private activatedRoute:ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(params => {
      // console.log('Getting data',params);
      this.post = JSON.parse(params['post']);
      console.log('post',this.post);
      console.log('id',this.post['ID']);

      this.post_name = this.post['post_title'];
      this.post_content = this.post['post_content'];

    });
    

   }

  ngOnInit() {
  }
  async update(position:'bottom'){
    const loading = await this.loadingController.create({ message: 'Loading...', });
    loading.present();

    if (this.post_name != null && this.post_content != null) {
      let savedata: any = {
        id:this.post['ID'],
        post_title: this.post_name,
        post_content: this.post_content
      }
      this.wordpressapiService.senddata("update_myposts", savedata).subscribe(async (res: any) => {
        console.log(res);
        loading.dismiss();
        this.post_name = '';
        this.post_content = '';
        const toast = await this.toastController.create({
          message: 'Post Updated',
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
