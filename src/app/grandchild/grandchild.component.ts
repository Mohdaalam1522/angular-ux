import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})

export class GrandchildComponent {
  profileForm: FormGroup;
   constructor(){
    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('',Validators.maxLength(8)),
        address: new FormGroup({
          street: new FormControl(''),
          city: new FormControl(''),
          state: new FormControl(''),
          zip: new FormControl(''),
          Password:new FormControl('',Validators.pattern('((?=.*[a-z])(?=.*[A-Z]))'))
        })
    }); 
  }
  onSubmit() {
    console.warn(this.profileForm.value);
  }

}

