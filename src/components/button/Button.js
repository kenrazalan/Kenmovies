import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const ButtonContainer  = styled.div`
    button{
        display: flex;
        margin: 30px auto;
        background: rgb(59, 179, 59);
        border: 1px solid rgb(59, 179, 59);
        font-size: 1rem;
        border-radius: .6rem;
        padding: 1rem 2rem;
        font-weight: 700;
        color: #fff;
    }
`

function Button({text,link}) {
    const history = useHistory()
    return (
        <ButtonContainer>
        <button onClick={()=>history.push(`/${link}`)} >
            {text}
        </button>
        </ButtonContainer>
    )
}

export default Button
