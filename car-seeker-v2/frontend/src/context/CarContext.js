import React, { createContext, useReducer } from 'react'

export const CarContext = createContext();

export const carReducer = (state, action) => {
    switch(action.type)
    {
        case 'SET_CARS':
            return {
                cars: action.payload
            } 
        case 'CREATE_CARS':
            return {
                cars: [action.payload, ...state.cars]
            }
        default:
            return state;
    }
}

export const carContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(carReducer, {
        cars: null
    });

    return (
        <carContext.Provider value={{...state, dispatch}}>
            {children}
        </carContext.Provider>

    )
}