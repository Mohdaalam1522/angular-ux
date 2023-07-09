import { Component, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Output() myToggleBTN = new EventEmitter<string>();
  condition: boolean | undefined;
  firstName: any;
  middleName: any;
  lastName: any;
  @ViewChildren(NgModel) modelRefList: QueryList<NgModel> | undefined;

  constructor() {
  //  console.log('child 2', this.myDataService.concatenate('a', 'b'))
    }
  myBtn() {
    this.condition = !this.condition;
    this.myToggleBTN.emit("Data transfer from Child to Parent")

  }

  ngAfterViewInit() {
    if (this.modelRefList) {
      this.modelRefList.changes
        .subscribe(data => {
          console.log(data)
        }
        )
    }
  }

  show() {
    if (this.modelRefList)
      this.modelRefList.forEach(element => {
        console.log(element)
        //console.log(element.value)
      });

  }

}
