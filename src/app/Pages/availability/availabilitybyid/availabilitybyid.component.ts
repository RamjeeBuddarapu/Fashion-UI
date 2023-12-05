import { Component } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Availability } from '../../../Models/availability';

@Component({
  selector: 'app-availabilitybyid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './availabilitybyid.component.html',
  styleUrl: './availabilitybyid.component.css'
})
export class AvailabilitybyidComponent {
  availabilityId?: number = 0;
  availability: Availability;
  errMsg: string = '';
  isavailabilityExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.availability = new Availability();
    
    this.activateRoute.params.subscribe((p) => (this.availabilityId = p['mid']));
    console.log(this.availabilityId);
    this.search();
  }
  search() {
    this.http
      .get<Availability>(
        'http://localhost:5254/api/Availaility/GetAvailabilityById/' + this.availabilityId
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.availability = response;
          this.isavailabilityExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid availability Id';
          this.isavailabilityExist = false;
        }
      });

}
}
