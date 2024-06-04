import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
  constructor(private http: HttpClient) { }

  private apiKey:string = 'Q3EOnrtB3L0OeoIsCldEfl4kMY4Zxrsu';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';
  private _tagHistory: string[] = [];


  get tagsHistory() {
    return [...this._tagHistory];
  }

  private validateHistory(tag:string):void {
    tag = tag.toLowerCase();
    if(this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
  }

  searchTag(tag:string):void {
    if(tag.length === 0) return
    this.validateHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get(`${this.serviceUrl}/search`, {params})
      .subscribe(resp => {
        console.log(resp)
      })
    // console.log(this._tagHistory);
  }
}
