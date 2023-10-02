import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  constructor(private http: HttpClient) { }


  cards: any[];

  repost(){
    console.log("repost");
  }
  ngOnInit(): void {
    const apiUrl = 'https://2irz42a5nj.execute-api.us-east-1.amazonaws.com/campaign/shopId/32266d51-2691-4859-bab5-f6a7245390ba';
  
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.cards = data.map((item) => ({
          image: `data:image/png;base64,${item.adStream}`,
          title: item.title,
          content: item.description,
        }));
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }
  
  

}
