import styled from 'styled-components'

export const GenreWrapper  = styled.div`
    .genres-container{    

        width:100%;
        padding:  0rem 4.8rem;
    }
    .imahe{
        position: relative;
        border-radius: 6px;
        height: 150px;
        width: 266px;
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
    .genres{      
        padding-bottom: 50px;
        margin-top: 50px;
        width:100%;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 1.2rem;
    }
    .image-container{
        //position: relative;
    }
    h1{
        padding: 2rem 0 0 2rem;
    }
    p{  
        font-size: 2rem;
        z-index: 2;
        font-weight: bold;
    }
    @media screen and (max-width: 1020px) {
        .genres{           
            grid-template-columns: repeat(3,1fr);         
        }
    }
    @media screen and (max-width: 876px) {
        .genres{           
            grid-template-columns: repeat(2,1fr);         
        }
        .genres-container{
            padding:0;
        }
    }
    @media screen and (max-width: 480px) {
        .imahe{           
           width:160px ;
           height: 70px;
        }
        h1{
            padding: 0rem 0 0 2rem;
            text-align: center;
    }
        p{
            font-size:1.1rem;
            
        }
    }
`