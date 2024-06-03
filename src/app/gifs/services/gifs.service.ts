import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
  constructor() { }


  private _tagHistory: string[] = []


  get tagsHistory() {
    return [...this._tagHistory];
  }

  searchTag(tag:string):void {
    this._tagHistory.unshift(tag);

    console.log(this._tagHistory)
  }
}
