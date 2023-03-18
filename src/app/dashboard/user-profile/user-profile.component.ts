import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/common.service';
import { UserDetailsPopUpComponent } from '../user-details-pop-up/user-details-pop-up.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  formData: any;
  name: string = "";
  domain: string = "";
  gender: string = "";
  dateOfBirth: any;
  phone: any;
  location: string = "";

  constructor(public dialog: MatDialog, private datePipe: DatePipe, public commomService: CommonService) { }

  ngOnInit(): void {
    this.name = "Abhishek Singh"
    this.domain = "www.google.com"
    this.gender = "Male"
    this.dateOfBirth = "05-Feb-1998"
    this.phone = "+91 8737876738"
    this.location = "Agra, Uttar Pradesh"
    this.commomService.formdata = { "fname": this.name, "domain": this.domain, "gender": this.gender, "dateOfBirth": this.dateOfBirth, "phone": this.phone, "location": this.location }

  }

  updateFormData(data: any) {
    if (data) {
      this.name = data.fname;
      this.domain = data.domain
      this.gender = data.gender.toLowerCase() == "male" ? "Male" : "Female"
      this.dateOfBirth = this.datePipe.transform(data.dateOfBirth, 'dd-MMMM-YYYY')
      this.phone = data.phone;
      this.location = data.location;
    }
  }

  openDialog() {
    let dialogRef = this.dialog.open(UserDetailsPopUpComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.commomService.formdata = result;
      this.updateFormData(result);
    });

  }

}
