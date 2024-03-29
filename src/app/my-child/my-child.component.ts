import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent {
  @Input() parent: string | undefined;
  @Input() child: string | undefined;
  @Output() myCustomersData = new EventEmitter<Customer[]>();
  @Output() myToggleFlag = new EventEmitter<boolean>();
  @Output() mybuttonflag = new EventEmitter<string>();
  @Output() myText = new EventEmitter<string>();
  @Output() myCustomersName = new EventEmitter<string>();
  @Output() myChildParent = new EventEmitter<string>();
  @Input() mychild: string | undefined;
  @Output() myChildOut = new EventEmitter<string>();
  @Output() dataFromGrandChild = new EventEmitter<string>();

  num: any;
  condition;
  firstName: any;
  myCls: any;
  myColor: any;
  customers: Customer[] = [
    { customerNo: 1, name: 'Rahuld Dravid', city: 'Banglaore', state: 'Karnataka', country: 'India' },
    { customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India' },
    { customerNo: 3, name: 'Saurrav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India' },
    { customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India' },
    { customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India' }
  ]

  constructor() {
    this.condition = false;
  }
  firstNameChanged(arg: any) {
    this.myCls = arg.target.value;
    console.log(
      "firstNameChanged  argument " + arg + "  component " + this.firstName
    );
  }
  dataChild: string = "aaaaaa";
  myName: string = "Aalam";
  childName: string = "parent to child";
  grandparent: string = "Grand To Parent";
  myToggleBtn() {
    this.condition = !this.condition;
    this.myToggleFlag.emit(this.condition);
    this.mybuttonflag.emit(this.myColor);
    this.myText.emit("myColor");
    this.myCustomersName.emit("Data from child to parent");
    this.myChildParent.emit("Data transfer from Child to Parent");
    this.myChildOut.emit("data from child to parent Again");
    this.dataFromGrandChild.emit(this.dataChild);
  }
  sendMessage() {
    this.myCustomersData.emit(this.customers);
  }
  childParent(toggleData: string) {
    this.dataChild = toggleData;
 }
 }
export interface Customer {
  customerNo: number;
  name: string;
  address?: string | null;
  city: string;
  state: string;
  country: string;
}


