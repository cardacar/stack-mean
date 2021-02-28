import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL_API = 'http://localhost:3000/products'

  constructor() {  }

  getProducts(){
    return[]
  }
}
