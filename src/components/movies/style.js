import styled from 'styled-components'

export const UpcommingsWrapper  = styled.div`
    .movies-container{    
        padding:  0rem 10px;

    }
    .movie{ 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    img{
        width: 100%;
        border-radius: 6px;
        height: auto;

    }
    .image-container{
       position: relative; 
       width: 100%;
       
    }

    .movies {
        margin-top: 30px;
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
    @media (min-width: 768px) { 
        .movies{ 
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px 30px;
        }
        .movies-container{
            padding:  0rem 40px;
        }
        h3{
            padding-top: 2rem;
            font-size: 20px;
        }
        
     }
     @media (min-width: 1024px) { 
        .movies{ 
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
     }
     @media (min-width: 1536px) { 
        .movies{ 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
     }


    .release-date{
        margin-bottom: 15px;
    }

    h3{
        //padding-left: 2rem
        text-align: center;
    }
    .rating{
        position: absolute;
        top: 5px;
        left: -5px;
        background:#3bb33b;
        text-align: center;
        min-width: 30px;
        width: fit-content;
        padding: 1px 5px;
        border-radius: 3px;
    }
    `