import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookmarkComponent } from './create-bookmark.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateBookmarkComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class CreateBookmarkModule {}
