import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  constructor(private service: ApiService, private spinner: NgxSpinnerService) { }


  cards: any[];

  repost(post){
    this.spinner.show()
    const payload = {
      shopId: "32266d51-2691-4859-bab5-f6a7245390ba",
      title: post.title,
      description: post.content,
      adStream: post.image,
      publishedDate: new Date()
    }
    this.service.addPost(payload).subscribe((data)=> {
      console.log(data)
      this.spinner.hide()
    },
    (error) => {
      console.error('Error adding post:', error);
      this.spinner.hide()
    })
  }

  ngOnInit(): void {
    this.spinner.show()
    this.service.getCampaign().subscribe(
      (data: Array<any>) => {
        this.cards = data.map((item) => ({
          image: item.adStream,
          title: item.title,
          content: item.description,
        }));
        this.spinner.hide()
      },
      (error) => {
        console.error('Error fetching data from API:', error);
        this.spinner.hide()
      }
    );
  }

}
