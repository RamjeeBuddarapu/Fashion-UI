import { Component } from '@angular/core';
import { Seller } from '../../../Models/seller';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sellerbyid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './sellerbyid.component.html',
  styleUrl: './sellerbyid.component.css'
})
export class SellerbyidComponent {
  sellerId?: number = 0;
  seller: Seller;
  errMsg: string = '';
  issellerExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.seller = new Seller();
    
    this.activateRoute.params.subscribe((p) => (this.sellerId = p['mid']));
    console.log(this.sellerId);
    this.search();
  }
  search() {
    this.http
      .get<Seller>(
        'http://localhost:64257/api/Movie/GetMovieById/' + this.sellerId
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.seller = response;
          this.issellerExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Seller Id';
          this.issellerExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('http://localhost:64257/api/Movie/EditMovie', this.seller)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('getall');
  }
  delete() {
    this.sellerId = this.seller.sellerId;
    this.http
      .delete('http://localhost:64257/api/Movie/DeleteMovie/' + this.sellerId)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('getall');
  }

}




