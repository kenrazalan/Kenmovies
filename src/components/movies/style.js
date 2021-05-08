import styled from 'styled-components'

export const UpcommingsWrapper  = styled.div`
    .movies-container{
        
        width:100%;
    }
    .movies{
        padding-bottom: 50px;
        margin-top: 50px;
        width:100%;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(5,1fr);
        grid-gap: 1.2rem;
    }
    .release-date{
        margin-bottom: 15px;
    }
    @media screen and (max-width: 976px) {
        .movies{
            grid-template-columns: repeat(4,1fr); 
        }
    }
    @media screen and (max-width: 790px) {
        .movies{
            grid-template-columns: repeat(3,1fr); 
            grid-gap: 0rem;
        }
        .release-date{
           
        }
    }
    @media screen and (max-width: 480px) {
        .movies{
            grid-template-columns: repeat(2,1fr); 
            grid-gap: 0rem;
        }
    }
    img{
        
        border-radius: 6px;
        height: 270px;
    }
    .image-container{
       position: relative; 
    }
    h1{
        padding: 2rem 0 0 2rem;
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