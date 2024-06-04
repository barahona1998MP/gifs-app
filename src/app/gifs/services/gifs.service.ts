import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
  constructor() { }


  private _tagHistory: string[] = []


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
    console.log(this._tagHistory)
  }
}
