import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../dataservice/contact.data.service';
import { ContactInfo } from './contact';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  person: ContactInfo = {
    name: '',
    subject: '',
    email: ''
  };
  users: ContactInfo[] = [];

  personForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
  });

  constructor(private contactService: ContactService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string ) {
    this._snackBar.open(message, undefined, {
      duration: 2000,
      horizontalPosition: 'end',
      panelClass: ['success-snackbar']
    });
  }

  sendEmail(): void {
    this.contactService.postData(this.person).subscribe((res: any) => {
      this.users.push(this.person);
    });

    this.openSnackBar(`Thank you ${this.person?.name ? this.person.name: ''}, I will reach out to you shortly!`, "success");
  }


}
