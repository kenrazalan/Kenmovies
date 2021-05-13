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
        grid-template-columns: repeat(6,1fr);
        grid-gap: 1rem;
    }
    .cast-img{
        
        border-radius: 6px;
        height: 230px;
    }
    .character{
        font-size: 11px;
    }
    @media screen and (max-width: 1100px) {
        .casts{           
            grid-template-columns: repeat(5,1fr);         
        }
    }
    @media screen and (max-width: 976px) {
        .casts{           
            grid-template-columns: repeat(4,1fr);         
        }
    }
    @media screen and (max-width: 790px) {
        .casts{
            grid-template-columns: repeat(3,1fr); 
            
            padding: 0;
        }
    }
    @media screen and (max-width: 480px) {
        .casts-container{
            padding: 0;
        }
        .casts{
            grid-template-columns: repeat(2,1fr); 
            
            padding: 0;
        }
    }
    `