import styled from 'styled-components'

export const BannerContainer  = styled.div`
    .banner-container{
        width:100%;
        min-height:100vh;
        margin: 0 auto;
        background-size: cover;
        background-position: center;
        object-fit: contain;
        position: relative;  
        padding: 6rem 10% 6rem; 
    }
    .banner-container::before{      
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
    .banner .banner-info {
        z-index: 4;
        max-width: 360px;
        //padding: 10rem 12rem 0;
        //height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;    
        justify-self: center; 
        align-items: center;
    }
    .banner .banner-info h1{
        text-align: center;
        font-size: 25px;
        padding: 10px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }
    .banner .banner-info h2{
        font-size: 1.3rem;
        font-weight: normal;
        /* max-height: 150px;
        overflow: hidden; */
        
    }
    .banner .banner-info button{
        transition: .5s;
        padding: 10px 20px;
        width: 100px;
        //background-color: rgba(17, 17, 17, 0.8);
        background: #3bb33b;
        font-weight: bold;
        letter-spacing: 2px;
        color:#fff;
        border:none;
        outline: none;
        border-radius: 5px;
        cursor: pointer;
        margin:20px 0px;
        font-family: 'Oswald', sans-serif;
        
    }
    .banner .banner-info button:hover{
        background-color: #e6e6e6;
        color: #000;
    }
    .icon-star{
        color: yellow;
    }
    .rating{
        font-size: 1rem;
        padding: 0;
    }
        .banner {
            width: 100%;
            min-height: 80vh;
            display: grid;
            align-items: center;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            grid-auto-columns: 1fr;
            grid-auto-rows: 1fr;
            gap: 0px 10px;
            grid-auto-flow: column;
            grid-template-areas:
                "."
                ".";
            }

    img{
        height: auto;
        width: 200px;
        border-radius: 6px;
        box-shadow: 0 10px 30px rgb(0 0 0 / 30%);
        object-fit: cover;
        z-index: 99;
        justify-self: center;
    }

    @media (min-width: 1024px) { 
        img{
            height: 400px;
            width: 300px;
        }
        .banner .banner-info{
            align-items: unset;
        }
        .banner .banner-info h1{
            text-align: unset;
        }
        .banner {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            grid-auto-flow: row;
            grid-template-areas:
                ". .";
            }

     }
    @media screen and (min-width: 1536px) {
        img{
            height: auto;
            width: 350px;
        }
    }


`