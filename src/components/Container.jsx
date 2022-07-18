
import { useContext, useEffect, useState } from "react";
import { AllContext } from "../context/AllContext";
import { types } from "../types/types";

import { ImgRecipe } from "./ImgRecipe"
import { ListRecipe } from "./ListRecipe";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";


export const Container = () => {

  const { dispatch } = useContext( AllContext );
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    dispatch?.({
      type: types.searchRecipes,
      payload: filter.toLowerCase(),
    })
    
  }, [filter])
  

  return (
    <div className="container-img-form">
        <ImgRecipe />
        <div className="col container-form">
            <h2 className="text-title"> Kitchen Recipes </h2>
            <SearchInput setFilter={ setFilter } />
            <SearchButton setFilter={ setFilter } />
            <ListRecipe />
            <div className="button-add-recipe">+</div>
        </div>
    </div>
  )
}
