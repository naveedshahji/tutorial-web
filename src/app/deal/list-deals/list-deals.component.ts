import { Component, OnInit } from '@angular/core';
import { Deal, AddDealGQL, DealsGQL, DealsDocument, DeleteDealsGQL } from '../../../generated-types';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-list-deals',
  templateUrl: './list-deals.component.html',
  styleUrls: ['./list-deals.component.scss']
})
export class ListDealsComponent implements OnInit {
  deals$: Observable<any>;
  dealsData: any;
  isLoading = true;

  constructor(
    private readonly dealQl: DealsGQL , private readonly deleteDealsGQL: DeleteDealsGQL) {}

  ngOnInit(): void {
        
    //   let a =   this.dealQl.watch().valueChanges;
         
    // a.subscribe((result) => {
    //   this.isLoading = false;
    //   console.log("r" ,result)
    // });
    // let a = this.dealQl.watch().valueChanges;
    // a.subscribe((res)=>{
    //   this.dealsData = res.data.deals;
    //  console.log("r" ,res.data.deals)
    // })
    this.deals$ = this.dealQl.watch().valueChanges.pipe(map((result) => result.data.deals));
  }
  delete(id:any){
    console.log(id)
    this.deleteDealsGQL
        .mutate(
          {
            deleteDeals: { _id: id },
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
          console.log("success delete")
      });
  }
}
