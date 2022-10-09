import { Component, OnInit } from '@angular/core';
import { DealsDocument, AddDealGQL } from '../../../generated-types';
import { FormControl, FormBuilder,
  FormGroup,AbstractControl,
  Validators } from '@angular/forms';

@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.scss']
})
export class AddDealComponent implements OnInit {
  // name = new FormControl('', [Validators.required, Validators.email]);
  // link = new FormControl('', [Validators.required]); 
  submitted: boolean = false;
  lForm: FormGroup;
  lname: string = "";
  link: string = "";
  constructor( private readonly addDealGql: AddDealGQL
    , private readonly fb: FormBuilder)  {
      this.createForm();
    }
    createForm() {
      this.lForm = this.fb.group({
        lname: [
          "",
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ],
        ],
        link: ["", [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
      });
    }
  
    get f() {
      return this.lForm.controls;
    }
  
    cannotContainSpace(control: AbstractControl)  {
      if((control.value as string).indexOf(' ') >= 0){
        return {cannotContainSpace: true}
      }
  
      return null;
    }

  ngOnInit(): void {
    //this.lForm.controls["Cname"].setValue(this.cmpData.Cname);
  }

  addDeal(fv:any) : void {
    console.log("1111111", fv)
    this.submitted = true;
      if (!fv.lname || !fv.link) {
        return;
      } else {
       
        this.addDealGql
          .mutate(
            {
              addDealData: { name: fv.lname, link: fv.link },
            },
            {
              refetchQueries: [
                {
                  query: DealsDocument,
                },
              ],
            }
          )
          .subscribe((res) => {
            if(res){
              const element = window.document.querySelector("#sModal");
             
              if (element !== null) {
                  console.log("mmmmm", element)
              element.classList.add("show");
             // element.style.display = "block";
              }
            }
            console.log("success",res)
        });
      }
  }
}
