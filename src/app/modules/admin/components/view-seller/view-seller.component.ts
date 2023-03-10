import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-view-seller',
  templateUrl: './view-seller.component.html',
  styleUrls: ['./view-seller.component.css']
})
export class ViewSellerComponent {

  constructor(private service : AdminService){}

  sellerList :any

  ngOnInit(){
    this.service.getSeller().subscribe(res =>{
      this.sellerList = res
    })
  }

}
