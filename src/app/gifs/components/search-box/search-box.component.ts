import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService) {}
  @ViewChild('tagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // searchBox(newTag:string):void {
  //   console.log({newTag})
  // }
  searchTag():void {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);
    console.log(newTag)

    this.tagInput.nativeElement.value = ''
  }
}
