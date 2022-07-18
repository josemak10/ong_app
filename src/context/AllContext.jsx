import { createContext, useReducer } from 'react';

import { data_recipe } from '../types/data_recipe';
import { allReducer } from './allReduce';


export const AllContext = createContext();

const initialState = {
    recipes: data_recipe,
}


export const AllProvider = ({ children }) => {

    const [allState, dispatch] = useReducer( allReducer, initialState );
   
    return (
        <AllContext.Provider value={{ 
            allState,
            dispatch
         }}>
            { children }
        </AllContext.Provider>
    )
}