import styled from 'styled-components'

export const CastsWrapper  = styled.div`
    .casts-container{
        width:100%;
        padding:  0rem 4.8rem;
    }
    .casts{
        margin-top: 50px;
        padding-bottom: 50px;
        width: 100%;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 1.2rem;
    }
    img{
        
        border-radius: 6px;
        height: 270px;
    }
    `