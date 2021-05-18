import styled from 'styled-components'

export const PeopleWrapper  = styled.div`
    .peoples-container{    

        width:100%;
        padding:  0rem 4.8rem;
    }
    .peoples{      
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
        .peoples{           
            grid-template-columns: repeat(4,1fr);         
        }
    }
    @media screen and (max-width: 790px) {
        .peoples{
            grid-template-columns: repeat(3,1fr); 
            grid-gap: 0rem;
            padding: 0;
        }
        .release-date{
           
        }
    }
    @media screen and (max-width: 480px) {
        .peoples-container{
            padding:  0;
        }
        .peoples{
            grid-template-columns: repeat(2,1fr); 
            
        }
        img{
            height: 230px !important;       
        }
        p{
            font-size: 12px;        
        }
        .people{
            max-width: 80%;
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