import { Component, Input, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyDataService, Post } from '../services/my-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css'],
 // providers: [MyDataService]
})
export class GrandchildComponent {
  profileForm: FormGroup;
  firstName: any;
  post: Observable<Post[]> | undefined;
  constructor(@Optional() private myDataService: MyDataService) {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.maxLength(8)),
      address: new FormGroup({
        street: new FormControl('',Validators.required),
        city: new FormControl('Ghaziabad'),
        state: new FormControl('U.P'),
        zip: new FormControl('244221'),
        psw: new FormControl('', Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)'))
      })
    });
    console.log('from Grand child',this.myDataService?.concatenate('mohd','aalam'))
  }

  ngOninIt(){
   this.myDataService.myPostsData;
  }
  onSubmit() {
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Mohammad',
      address: {
        street: '123',
        city: 'Amroha',
        state: 'Uttar Pradesh'
      }
    });
    this.myDataService.myPostsData;
  }

}
