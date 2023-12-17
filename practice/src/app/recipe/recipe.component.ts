import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit{
  recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor(private recipeService : RecipeService){}

ngOnInit() {
  this.recipes = this.recipeService.getRecipes();
  //call recipe service to get single recipe clicked on in the recipe-item component
  this.recipeService.recipeChanged
    .subscribe((recipe: Recipe)=> {
      this.selectedRecipe = recipe;
      console.log("the recipe is" + this.selectedRecipe)

    })
}

}
