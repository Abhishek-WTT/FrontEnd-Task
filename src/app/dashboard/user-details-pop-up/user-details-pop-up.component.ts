import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/common.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-user-details-pop-up',
  templateUrl: './user-details-pop-up.component.html',
  styleUrls: ['./user-details-pop-up.component.scss']
})
export class UserDetailsPopUpComponent implements OnInit {

  formData: any;
  profileFormData!: FormGroup;

  constructor(private formBuilder: FormBuilder, public commonService: CommonService, public dialog: MatDialogRef<UserDetailsPopUpComponent>) { }

  ngOnInit(): void {
    this.formData = this.commonService.formdata;
    this.profileFormData = this.formBuilder.group({
      dateOfBirth: [''],
      fname: new FormControl(''),
      domain: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
      location: new FormControl('')
    })
  }

  ngAfterViewInit() {
    // this.profileFormData.
    this.updateForm(this.formData);
  }

  updateForm(data: any) {
    this.profileFormData.get('dateOfBirth')?.patchValue(this.formatDate(new Date(data?.dateOfBirth)));
    this.profileFormData.get('fname')?.patchValue(data?.fname);
    this.profileFormData.get('domain')?.patchValue(data?.domain);
    this.profileFormData.get('gender')?.patchValue((data?.gender)?.toLowerCase());
    this.profileFormData.get('phone')?.patchValue("+91 " + data?.phone);
    this.profileFormData.get('location')?.patchValue(data?.location);
  }

  formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }


  onSubmit() {
    this.dialog.close(this.profileFormData.value);
  }

}
