import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  a = 0

  constructor() { }

  increment(){
    this.a++
  }
  decrement(){
    this.a--
  }
}
