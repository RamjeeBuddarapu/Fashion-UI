import { Component } from '@angular/core';
import { User } from '../../../Models/user';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userbyid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './userbyid.component.html',
  styleUrl: './userbyid.component.css'
})
export class UserbyidComponent {
  userId?: number = 0;
  user: User;
  errMsg: string = '';
  isuserExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.user = new User();
    
    this.activateRoute.params.subscribe((p) => (this.userId = p['mid']));
    console.log(this.userId);
    this.search();
  }
  search() {
    this.http
      .get<User>(
        'http://localhost:64257/api/Movie/GetMovieById/' + this.userId
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.user = response;
          this.isuserExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid User Id';
          this.isuserExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('http://localhost:64257/api/Movie/EditMovie', this.user)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('getall');
  }
  delete() {
    this.userId = this.user.userId;
    this.http
      .delete('http://localhost:64257/api/Movie/DeleteMovie/' + this.userId)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('getall');
  }

}