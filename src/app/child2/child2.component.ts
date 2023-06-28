import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  @Output() myToggleBTN = new EventEmitter<string>();
  condition: boolean | undefined;

  myBtn() {
    this.condition = !this.condition;
    this.myToggleBTN.emit("Data transfer from Child to Parent")

  }


}
