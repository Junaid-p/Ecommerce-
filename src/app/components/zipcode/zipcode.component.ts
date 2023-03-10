import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ZipcodeValidatorService } from 'src/app/services/zipcode-validator.service';
import { ZipcodeValidator } from 'src/app/validation/zipcode.validator';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent {

  constructor(private service:ZipcodeValidatorService){}

  zipCodeForm = new FormGroup({

    zipcode: new FormControl('', 
    Validators.required,
    ZipcodeValidator.createValidator(this.service))

  })

}
