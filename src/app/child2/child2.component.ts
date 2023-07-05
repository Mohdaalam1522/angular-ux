import { Component, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';

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
    if(this.modelRefList)
    this.modelRefList.forEach(element => {
      console.log(element)
      //console.log(element.value)
    });
 
  }

}
