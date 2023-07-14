import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Burger',
        price:5,
        cookTime:'20-30',
        favorite:false,        
        origins:['U S'],
        star:3.0,
        imageUrl:'/assets/food-1.jpg',
        tags:['FastFood','lunch'],

    
      },
      {
        id:2,
        name:'Fires',
        price:2,
        cookTime:'20-30',
        favorite:false,        
        origins:['U S'],
        star:4.0,
        imageUrl:'/assets/food-2.jpg',
        tags:['FastFood','lunch'],   
      },
      {
        id:3,
        name:'Manchuria',
        price:10,
        cookTime:'20-30',
        favorite:false,        
        origins:['U S'],
        star:5.0,
        imageUrl:'/assets/food-3.jpg',
        tags:['FastFood','lunch'],

    
      },
      {
        id:4,
        name:'Pizza',
        price:10,
        cookTime:'20-30',
        favorite:false,        
        origins:['U S'],
        star:4.5,
        imageUrl:'/assets/food-4.jpg',
        tags:['FastFood','lunch'],

    
      },
      {
        id:5,
        name:'Noodles',
        price:8,
        cookTime:'20-30',
        favorite:false,        
        origins:['U S'],
        star:3.0,
        imageUrl:'/assets/food-5.jpg',
        tags:['FastFood','lunch'],

    
      },
      {
        id:6,
        name:'Shawarma',
        price:5,
        cookTime:'20-30',
        favorite:false,        
        origins:['U S'],
        star:4.0,
        imageUrl:'/assets/food-6.jpg',
        tags:['FastFood','lunch'],

    
      },
      {
        id:7,
        name:'Soup',
        price:4,
        cookTime:'20-30',
        favorite:false,        
        origins:['U S'],
        star:4.0,
        imageUrl:'/assets/food-7.jpg',
        tags:['FastFood','lunch'],

    
      },
      {
        id:8,
        name:'Taco',
        price:6,
        cookTime:'20-30',
        favorite:false,        
        origins:['U S'],
        star:3.5,
        imageUrl:'/assets/food-8.jpg',
        tags:['FastFood','lunch'],

    
      }

    ]
  }

}
