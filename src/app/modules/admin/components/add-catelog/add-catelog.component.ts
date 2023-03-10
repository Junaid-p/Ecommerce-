import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-catelog',
  templateUrl: './add-catelog.component.html',
  styleUrls: ['./add-catelog.component.css']
})
export class AddCatelogComponent {

  constructor(private service : AdminService){}

  categoryPic:any

  OnImagechange(event :any){
    this.categoryPic = event.target.files[0]
  }

  frontmessage : string = ''
  sataus : any =''


  submit(formData : any){

    const catagoryData = new FormData()

    catagoryData.append('category_name', formData['category_name'])
    catagoryData.append('category_des', formData['category_des'])
    catagoryData.append('category_image', this.categoryPic)

    this.service.addCategory(catagoryData).subscribe((res: {message : any , status : number}) =>{

      console.log(res)

      this.frontmessage = res.message
      this.sataus = res.status


    })

  }

}
