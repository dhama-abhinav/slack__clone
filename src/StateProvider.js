import React,
{createContext,useContext,useReducer} from 'react'

//creating basically data layers,so that i can push data indata layer and pull data also
export const StateContext = createContext()

export const StateProvider = ({reducer,initialState,children})=> (
    <StateContext.Provider value ={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext)

// children will be my app which is wrappedinside the provider
//can store anything to data and it will be awailble globaly to use anywhere
//reducer-it will listen to any action tthat will fireup into datat layer