import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLinkComponent } from './add-link.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddLinkComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class AddLinkModule {}
