import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public domain: string;

  constructor() {
    this.domain = "http://localhost:3000"
  }
}
