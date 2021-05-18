import React from 'react'
import PeopleCard from './PeopleCard'
import {PeopleWrapper} from './style'

function Peoples({results,isLoading,title}) {
    return (
        <PeopleWrapper>
        <div className="peoples-container">
            <h1>{title}</h1>
            <div className="peoples"> 
                {results?.slice(0,10).map(res=>{
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
