import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private service: CommonService){}

  categoryData: any

  ngOnInit(){
    this.service.showCategory().subscribe(res =>{
      this.categoryData = res
    })
  }

}
