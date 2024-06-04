import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({providedIn: 'root'})
export class GifsService {
  constructor(private http: HttpClient) {
    this.loadLocalStorage()
  }

  private apiKey:string = 'coOvNkhlXRoe6W68s6nB9VobNHQ0loLW';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private _tagHistory: string[] = [];
  public gifsList: Gif[] = []


  get tagsHistory() {
    return [...this._tagHistory];
  }

  private saveLocalStorage():void {
   localStorage.setItem('history', JSON.stringify(this._tagHistory))
  }

  private loadLocalStorage():void {
    if(!localStorage.getItem('history')) return
    this._tagHistory = JSON.parse(localStorage.getItem('history')!)

    if(this._tagHistory.length === 0) return;
    this.searchTag(this._tagHistory[0])
  }

  private validateHistory(tag:string):void {
    tag = tag.toLowerCase();
    if(this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);

    this.saveLocalStorage()
  }

  searchTag(tag:string):void {
    if(tag.length === 0) return
    this.validateHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe(resp => {
        this.gifsList = resp.data
        console.log({gifs: this.gifsList})
      })
    // console.log(this._tagHistory);
  }
}
