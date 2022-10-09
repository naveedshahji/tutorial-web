import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  Bookmark,
  BookmarkDocument,
  UpdateBookmarkGQL,
} from '../../../../generated-types';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss'],
})
export class AddLinkComponent implements OnInit {
  link = new FormControl('', [Validators.required]);

  constructor(
     
  ) {}

  ngOnInit(): void {}

  getLinkError() {
    if (this.link.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

  addLink() {
    // this.updateBookmarkGql
    //   .mutate(
    //     {
    //       updateBookmarkData: {
    //         _id: this.bookmark._id,
    //         links: [...this.data.bookmark.links, this.link.value],
    //       },
    //     },
    //     {
    //       refetchQueries: [
    //         {
    //           query: BookmarkDocument,
    //           variables: { _id: this.data.bookmark._id },
    //         },
    //       ],
    //     }
    //   )
    //   .subscribe(() => {
    //     this.dialogRef.close();
    //   });
  }
}
