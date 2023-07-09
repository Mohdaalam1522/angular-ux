import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from './my-child/my-child.component';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MyDataService } from './services/my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //  providers: [MyDataService]
})
export class AppComponent implements OnInit {
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
  formValue: any = {}
  @ViewChild('myTemplate') myTemplateForm: NgForm | undefined;
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

    this.formValue = {
      fName: 'Mr.',
      
      City: 'Amroha',
      state: 'Uttar Pradesh',
      pincode: '244221',
      email: 'mohdaalam1522@gmail.com'

    }
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
    this.myTemplateForm?.control.patchValue({ fName: 'aa' })
    this.myTemplateForm?.control.patchValue({ lName: 'aa' })
    this.myTemplateForm?.control.patchValue({ City: 'a' })
    this.myTemplateForm?.control.patchValue({ state: 'b' })
    this.myTemplateForm?.control.patchValue({ pincode: 'c' })
    this.myTemplateForm?.control.patchValue({ email: 'd' })
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }


  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
  }

  updateValue() {
    this.formValue = {
      fName: 'Mr. Updated',
      lName: 'ABC Updated',
      City: 'Amroha updated',
      state: 'Uttar Pradesh updated',
      pincode: '123456',
      email: 'updated@gmail.com'
    }
  }
}

