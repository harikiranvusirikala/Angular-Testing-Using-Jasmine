import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  mobiles: any;

    sortOption: string = '';
    
  constructor(private lservice:LoginService){}

  ngOnInit(): void {
    this.lservice.getMobileData().subscribe(data=>{this.mobiles=data});
  }

}
