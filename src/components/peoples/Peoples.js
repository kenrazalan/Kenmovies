import React from 'react'
import PeopleCard from './PeopleCard'
import {PeopleWrapper} from './style'

function Peoples({results,isLoading,title}) {
    return (
        <PeopleWrapper>
        <div className="peoples-container">
            <h3>{title}</h3>
            <div className="peoples"> 
                {results?.map(res=>{
                    return( 

                <PeopleCard people={res} isLoading={isLoading}/>
                )}
                )}
            </div>
        </div>
        </PeopleWrapper>
    )
}

export default Peoples
