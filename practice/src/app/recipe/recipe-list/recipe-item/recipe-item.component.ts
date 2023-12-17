import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  //We need the recipe from the recipe loop on the selector as an input from parent
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService){}
 //Recipe detail component needs to subscribe to event in order render clicked recipes view
  onRecipe() {

    this.recipeService.recipeChanged.emit(this.recipe);
  }

}
