import styled from 'styled-components'

export const GenreWrapper  = styled.div`
    .genres-container{    
        padding:  0rem 10px;
    }
    .imahe{
        position: relative;
        border-radius: 6px;
        height: 100px;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .imahe::before{      
        content:'';
        position: absolute;
        width: 100%;
        border-radius: 6px;
        height:100%;
        bottom: 0;
        z-index: 0;
        background: rgba(5,6,7,.7);
        //background-image: linear-gradient(360deg,#111,rgba(17, 17, 17, 0.8),transparent);
        left:0;
    }
    .imahe:hover::before {
         background: #3bb33b;
         opacity: 0.8;
         transition: .3s;
    }
    .genres {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-auto-columns: 1fr;
        gap: 10px 10px;
        grid-auto-flow: row;
        grid-template-areas:
            ". ."
            ". ."
            ". ."
            ". .";

    }
    .image-container{
       position: relative; 
       width: 100%;
    }
    h3{
        
        text-align: center;
    }
    p{  
        font-size: .8rem;
        z-index: 2;
        font-weight: bold;
    }
    @media (min-width: 768px) { 
        .genres{ 
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px 30px;
        }
        .genres-container{
            padding:  0rem 40px;
        }
        h3{
            padding-top: 2rem;
            font-size: 20px;
        }
        p{
            font-size: 1.5rem;
        }
        
     }
     @media (min-width: 1024px) { 
        .genres{ 
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
     }
     @media (min-width: 1536px) { 
        .genres{ 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
     }
`