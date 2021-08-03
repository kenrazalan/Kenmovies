import styled from 'styled-components'

export const CastsWrapper  = styled.div`
    .casts-container{
        //width:100%;
        min-height: 33vh;
        padding:  0rem 10px;
    }
    .casts {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-auto-columns: 1fr;
        gap: 10px 10px;
        grid-auto-flow: row;
        grid-template-areas:
            ". ."
            ". ."
            ". ."
            ". .";

    }

    @media (min-width: 768px) { 
        .casts{ 
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px 30px;
        }
        .casts-container{
            padding:  0rem 40px;
        }
        
     }
     @media (min-width: 1024px) { 
        .casts{ 
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
     }
     @media (min-width: 1536px) { 
        .casts{ 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
     }
    .cast-img{
        width: 100%;
        border-radius: 6px;
        height: auto;
    }
    .character{
        font-size: 11px;
    }
    .title{
        padding: 2rem 0 0 2rem;
    }
    /* @media screen and (max-width: 1100px) {
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
    } */
    `