import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Seafood', 'Not Hotdog', 'https://helios-i.mashable.com/imagery/articles/00D1fKR4XYLBrCEwbAlqeGn/hero-image.fill.size_1200x1200.v1623363064.png'),
    new Recipe('Octopus', 'A Water Animal', 'https://cdn.britannica.com/98/157198-050-8B4735F2/Octopus-swimming.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
