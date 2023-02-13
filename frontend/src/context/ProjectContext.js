import { createContext, useReducer} from 'react';


export const ProjectContext = createContext();

export const projectReducer = ( state ,action) =>{
    switch(action.type){
        case 'createproject':
            return {project:action.payload}
        case 'cancel':
            return {project:null}
        default:
            return state
    }
}

export const ProjectContextProvider = ({children}) =>{
    const [state ,dispatch] =useReducer(projectReducer ,{
        project : null
    })

    console.log('ProjectContext state: ', state)

    return(
        <ProjectContext.Provider value={{...state, dispatch}}>
            {children}
        </ProjectContext.Provider>
    )
}