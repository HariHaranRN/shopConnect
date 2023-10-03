import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="https://2irz42a5nj.execute-api.us-east-1.amazonaws.com/"
  shopId = "32266d51-2691-4859-bab5-f6a7245390ba"

  constructor(
    private http: HttpClient
  ) { }

  getCampaign() {
    return this.http.get(`${this.url + 'campaign/shopId/' +this.shopId}`)
  }
  
  addPost(body:any) {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post(`${this.url}campaign`, body, {headers});
  }

  offerGenerate(body) { 
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json');
    return this.http.post(`${this.url}generate/offer`, body, { headers });
  }

}
