import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './components/aside/aside.component';
import { GifsModule } from '../gifs/gifs.module';



@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    AsideComponent,
  ]
})
export class SharedModule { }
