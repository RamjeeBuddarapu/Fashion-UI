import { Routes } from '@angular/router';
import { AdduserComponent } from './Pages/User/adduser/adduser.component';
import { GetallUsersComponent } from './Pages/User/getallusers/getallusers.component';
import { UserbyidComponent } from './Pages/User/userbyid/userbyid.component';
import { GetallsellersComponent } from './Pages/seller/getallsellers/getallsellers.component';
import { SellerbyidComponent } from './Pages/seller/sellerbyid/sellerbyid.component';
import { AddsellerComponent } from './Pages/seller/addseller/addseller.component';
import { AddproductComponent } from './Pages/product/addproduct/addproduct.component';
import { GetallproductsComponent } from './Pages/product/getallproducts/getallproducts.component';
import { ProductbyidComponent } from './Pages/product/productbyid/productbyid.component';
import { AddbrandComponent } from './Pages/brand/addbrand/addbrand.component';
import { GetallbrandsComponent } from './Pages/brand/getallbrands/getallbrands.component';
import { BrandbyidComponent } from './Pages/brand/brandbyid/brandbyid.component';
import { GetallavailabilitiesComponent } from './Pages/availability/getallavailabilities/getallavailabilities.component';
import { Availability } from './Models/availability';
import { AvailabilitybyidComponent } from './Pages/availability/availabilitybyid/availabilitybyid.component';
import { GetorderbyidComponent } from './Pages/order/getorderbyid/getorderbyid.component';
import { GetordersComponent } from './Pages/order/getorders/getorders.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './Pages/login/login.component';
import { UserDashboardComponent } from './Pages/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    {path:'adduser',component:AdduserComponent},
    {path:'getallusers',component:GetallUsersComponent},
    {path:'userbyid',component:UserbyidComponent},
    {path:'addseller',component:AddsellerComponent},
    {path:'getallsellers',component:GetallsellersComponent},
    {path:'sellerbyid',component:SellerbyidComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'getallproducts',component:GetallproductsComponent},
    {path:'productbyid',component:ProductbyidComponent},
    {path:'addbrand',component:AddbrandComponent},
    {path:'getallbrands',component:GetallbrandsComponent},
    {path:'brandbyid',component:BrandbyidComponent},
    {path:'getallavailabilities',component:GetallavailabilitiesComponent},
    {path:'availabilitybyid',component:AvailabilitybyidComponent},
    {path:'getorderbyid',component:GetorderbyidComponent},
    {path:'getorders',component:GetordersComponent},
    {path:'admin',component:AdminDashboardComponent},
    {path:'login',component:LoginComponent},
    {path:'user',component:UserDashboardComponent},
    {
        path: 'user-dashboard',
        component:UserDashboardComponent,
        children: [
          { path: 'getall',component:GetallproductsComponent},
          { path: 'login', component: LoginComponent },
        ],
      },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        children: [
          { path: 'getall',component:GetallproductsComponent },
          { path: 'add-product',component:AddproductComponent },
          { path: 'login', component: LoginComponent },
        ],
      },
];
