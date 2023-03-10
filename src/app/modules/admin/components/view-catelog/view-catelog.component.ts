import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-view-catelog',
  templateUrl: './view-catelog.component.html',
  styleUrls: ['./view-catelog.component.css']
})
export class ViewCatelogComponent {

 

  constructor(private service : AdminService){}
  categoryList:any

  ngOnInit(){
    this.service.getcatagory().subscribe(res =>{

      this.categoryList = res

      console.log(this.categoryList)

      

    })
  }

}
