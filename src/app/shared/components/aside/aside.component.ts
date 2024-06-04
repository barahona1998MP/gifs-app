import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  constructor(private gifsService: GifsService) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory
  }

  public searchTag(tag:string):void {
    this.gifsService.searchTag(tag)
  }

}
