import { connection } from '../index'
import { Recipes } from '../types/recipes'


export default async function insertRecipe(recipe: Recipes) {
    
    await connection.insert({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description
    }).into('Recipes_Cookenu')
}