import React from 'react'
import { useHistory } from 'react-router'

function Back() {
    const history = useHistory()
    return (
        <div className="back">
                    <div className="btn pointer" onClick={()=>history.goBack()}>
                      <button className="back-button pointer bold" >Back</button>
                    </div>  
        </div>
    )
}

export default Back
