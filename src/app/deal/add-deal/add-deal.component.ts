import { Component, OnInit } from '@angular/core';
import { DealsDocument, AddDealGQL } from '../../../generated-types';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.scss']
})
export class AddDealComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.email]);
  link = new FormControl('', [Validators.required]); 

  constructor( private readonly addDealGql: AddDealGQL) { }

  ngOnInit(): void {
  }

  addDeal(){
      this.addDealGql
        .mutate(
          {
            addDealData: { name: this.name.value, link: this.link.value },
          },
          {
            refetchQueries: [
              {
                query: DealsDocument,
              },
            ],
          }
        )
        .subscribe(() => {
          console.log("success")
      });
  }
}
