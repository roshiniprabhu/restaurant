import { Component, OnInit } from '@angular/core';
import { FoodService } from './food.service';
import { Food } from './food';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  foods = new Array<Food>();

  constructor(private foodservice : FoodService) {}

  ngOnInit() {
    this.foodservice.getFoods().subscribe(response => {
      this.foods = response.map(item => 
        {
          return new Food( 
              item.body,
              item.id,
              item.title,
              item.userId
          );
        });
    });

  }

}
