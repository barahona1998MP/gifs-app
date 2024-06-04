import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListGifsComponent } from './components/list-gifs/list-gifs.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainPageComponent,
    SearchBoxComponent,
    ListGifsComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    MainPageComponent,
  ]
})
export class GifsModule { }
