import { Component } from '@angular/core';
import { Customer } from './my-child/my-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myParent: string = "data Transfer From Parent To child";
  title = 'mytestAalam';
  myName: string = 'Aalam from parent';
  childName: string = "Mohd Aalam";
  color: any
  dataFromParent: Customer[] | undefined;
  myToggleFlagFromChild: boolean | undefined;
  myToggleflagdata: string | undefined;
  myToggleflag: string | undefined;
  myFlagData: string | undefined;
  dataFromChild: string | undefined;
  Data: string | undefined;
  myGrandChildData: string | undefined;
  myChildData(msg: Customer[]) {
    console.log(msg);
    this.dataFromParent = msg;
  }

  constructor() {
    console.log("AppComponent:Contructed");
  }

  toggleData(toggleFlag: boolean) {
    this.myToggleFlagFromChild = toggleFlag
  }
  data(toggleData: string) {
    this.myToggleflagdata = toggleData
  }
  text(toggleData: string) {
    this.myToggleflag = toggleData
  }
  class(toggleData: string) {
    this.myFlagData = toggleData
  }
  parentData(toggleData: string) {
    this.myName = toggleData
  }

  datachild(toggleData: string) {
    this.Data = toggleData
  }

  grandChildData(msgFromGChild: string) {
    this.myGrandChildData = msgFromGChild;
  }

  ngOnChanges() {
    console.log("AppComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("AppComponent:ngOnInit");
  }

  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }


}

