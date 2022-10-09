import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark.component';
import { AddLinkModule } from './add-link/add-link.module';

@NgModule({
  declarations: [BookmarkComponent],
  imports: [
    CommonModule, 
    AddLinkModule
  ],
})
export class BookmarkModule {}
