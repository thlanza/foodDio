import { Component, Input, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-current-food',
  templateUrl: './current-food.component.html',
  styleUrls: ['./current-food.component.scss']
})
export class CurrentFoodComponent {

  @Input() food: Food;

}
