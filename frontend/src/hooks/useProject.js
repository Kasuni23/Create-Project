import { useState} from "react";
import {useProjectContext} from "./useProjectContext"

export const useProject =() =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useProjectContext() 

    const project = async  (projectname, description, startDate,endDate) =>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('api/project/cproject',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({projectname,description,startDate,endDate})

        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('project',JSON.stringify(json))
            
            dispatch({type: 'createproject',payload:json})

            setIsLoading(false)
        }
    }

    return {project, isLoading, error}
}