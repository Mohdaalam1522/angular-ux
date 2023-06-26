import { Component } from '@angular/core';
import { Customer } from './my-child/my-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytestAalam';
  name: string= 'Aalam';
  color: any
  dataFromParent: Customer[] | undefined;

  myChildData(msg: Customer[]){
    console.log(msg);
    this.dataFromParent = msg;
  }
}

