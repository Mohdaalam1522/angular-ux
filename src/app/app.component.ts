import { Component } from '@angular/core';
import { Customer } from './my-child/my-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytestAalam';
  myName: string= 'Aalam from parent';
  childName:string="Mohd Aalam";
  color: any
  dataFromParent: Customer[] | undefined;
  myToggleFlagFromChild: boolean | undefined;
  myToggleflagdata:string | undefined;
  myToggleflag:string | undefined;
  myFlagData: string | undefined;
  myChildData(msg: Customer[]){
    console.log(msg);
    this.dataFromParent = msg;
  }

  toggleData(toggleFlag: boolean){
this.myToggleFlagFromChild = toggleFlag
  }
  data(toggleData:string){
    this.myToggleflagdata= toggleData 
  }
  text(toggleData:string){
    this.myToggleflag= toggleData
   }
   class(toggleData:string){
     this.myFlagData=toggleData
    }
    parentData(toggleData:string){
      this.myName=toggleData
    }
    
   
   
}

