import styled from 'styled-components'

export const PreviewWrapper  = styled.div`
    .preview-container{
        width:100%;
        min-height:100vh;
        height: auto;
        margin: 0 auto;
        background-size: cover;
        //background-position: center;
        object-fit: contain;
        position: relative; 
        padding: 0px 10%; 

    }
    .view{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:  0rem 0rem 12rem ;
    }
    .back{
        padding: 8rem 0 3rem 0; 
        align-self: flex-start;
        z-index: 2;
    }
    button{
    }
    .preview-container::before{      
        content:'';
        position: absolute;
        width: 100%;
        height:100%;
        bottom: 0;
        z-index: 0;
        background: rgba(5,6,7,.7);
        //background-image: linear-gradient(360deg,#111,rgba(17, 17, 17, 0.8),transparent);
        left:0;
    }
    .preview-banner{
        width: 100%;
        height:100%;
        color:#fff;
        display: flex;
        align-items: center;
        justify-content: left;
        
    }
    img{
        height: 400px;
        width: 300px;
        border-radius: 6px;
        box-shadow: 0 10px 30px rgb(0 0 0 / 30%);
        object-fit: cover;
        z-index: 4;
        padding-right: 50px;
        margin: auto;
    }
    .preview-banner-info{
        z-index: 4;
        display: flex;
        flex-direction: column;
        justify-content: center; 
         
    }
    .preview-banner-info h1{
        font-size: 28px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }
    .preview-banner-info h2{
        font-size: 1.3rem;
        font-weight: normal;  
    }
    .icon-star{
        color: yellow;
    }
    .rating-genres-container{
            padding: 20px 0 20px 0;
    }
    .rating, .genres{
        font-size: 1.3rem ;
    }
    .genres{
        color: #cacaca
    }
    .overview{
        padding: 15px 0 20px;
    }

    @media screen and (max-width: 790px) {
        img{
            height: 300px !important;
            width: 200px !important;
            padding-right: 0;
        }
        h1{
            font-size: 21px !important;
            padding-top: 12px;
        }
        .genres, .rating , h2{
            font-size: 1rem !important;
        }
        .view{
            padding-bottom: 8rem;
        }
        .back{
            padding-top: 6rem;
        }
        .preview-banner{
            padding: 0;
            flex-direction: column; 
            justify-content: center !important;    
        }
        .preview-banner-info{
        align-items: center;
        text-align: center;
        }
    }
    @media screen and (max-width: 480px) {
        h1{
            font-size: 19px !important;
            padding-top: 12px;
        }
        .genres, .rating ,h2{
            font-size: 1rem !important;
        }
        .view{
            padding-bottom: 8rem;
        }
        .back{
            padding-top: 6rem;
        }
        .overview{
        padding: 10px 0 15px;
    }

    
    }


`