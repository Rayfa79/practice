import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  //Create event emitter that notifies components of recipe clicked
  recipeChanged = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe( 'Cajun Turkey Burger',  'Cajun cheeseburger with made with a special cajun seasoning topped with a a special spicy mayo with a toasted bun', 'https://divascancook.com/wp-content/uploads/2011/09/Still-1-728x430.jpeg',[]),
    new Recipe('Homemade Dinner Yeast Rolls', 'Pillowy-soft homeade yeast rolls that are so easy to make! Buttery with only a hing of sweetness makes these the perfect dinner rolls for any occasion',"https://divascancook.com/wp-content/uploads/2018/10/IMG_4575-728x546.jpg",[]),
    new Recipe('Spicy Crispy Fried Chicken','Crispy spicy fried chicken recipe thats full of cajun flavor and seasoned to perfection. A buttermilk brine ensures a juicy, tender piece of fried chicken everytime','https://divascancook.com/wp-content/uploads/2015/01/IMG_0231-750x469.jpg',[])
  ]

  constructor() { }

  getRecipes() {
    return this.recipes.slice()
  }
}
