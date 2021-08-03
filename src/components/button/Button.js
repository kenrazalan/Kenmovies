import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'


const ButtonContainer  = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    button{
        display: flex;
        margin: 30px auto;
        background: rgb(59, 179, 59);
        border: 1px solid rgb(59, 179, 59);
        font-size: 1rem;
        border-radius: .6rem;
        padding: .7rem 2rem;
        font-weight: 700;
        color: #fff;
        cursor: pointer;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 2;
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
