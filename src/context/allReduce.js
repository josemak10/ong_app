import { data_recipe } from "../types/data_recipe";
import { types } from "../types/types";

export const allReducer = ( state, action ) => {
    switch (action.type) {

        case types.searchRecipes:
            let list_recipe = []
            if ( action.payload === 'all' ) list_recipe = data_recipe;
            if ( action.payload === 'active') list_recipe = data_recipe.filter(data => data.before);
            if ( action.payload === 'inactive') list_recipe = data_recipe.filter(data => data.before === false);

            return {
                recipes: [...list_recipe]
            }


        default:
            return state;
    }

}