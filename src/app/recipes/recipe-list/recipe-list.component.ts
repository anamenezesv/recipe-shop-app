import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{

  recipes: Recipe[] = [
    new Recipe('Pão de Queijo', 'Gostosinho', 'https://www.bing.com/images/blob?bcid=smPGNKK4gsEGqN2Y0fA0nZopjtjI.....yY')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
