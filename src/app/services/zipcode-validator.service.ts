import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeValidatorService {

  constructor() { }

  private validZipcode = ['0001','0002','0003','0004'];
  fakeHttp(value:string){
    return of(this.validZipcode.includes(value)).pipe(delay(5000));
  }
}
