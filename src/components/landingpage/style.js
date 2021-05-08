import styled from 'styled-components'

export const BannerContainer  = styled.div`
    .banner-container{
        width:100%;
        height:100vh;
        margin: 0 auto;
        background-size: cover;
        background-position: center;
        object-fit: contain;
        position: relative;
        
    }
    .banner-container::before{      
        content:'';
        position: absolute;
        width: 100%;
        height:50%;
        bottom: 0;
        z-index: 0;
        background-image: linear-gradient(360deg,#111,rgba(17, 17, 17, 0.8),transparent);
        left:0;
    }
    .banner{
        height: 100%;
        width: 100%;
        position: relative;
        color:#fff;
    }
    .banner .banner-info {
        z-index: 4;
        padding: 0px 10%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 560px;
    }
    .banner .banner-info h1{
        font-size: 28px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }
    .banner .banner-info h2{
        font-size: 1.3rem;
        font-weight: normal;
        
    }
    .banner .banner-info button{
        transition: .5s;
        padding: 10px 20px;
        width: 100px;
        background-color: rgba(17, 17, 17, 0.8);
        color:#fff;
        border:none;
        outline: none;
        border-radius: 5px;
        cursor: pointer;
        margin:20px 0px;
    }
    .banner .banner-info button:hover{
        background-color: #e6e6e6;
        color: #000;
    }
    .icon-star{
        color: yellow;
    }
    .rating{
        padding: 10px 0 5px 0;
    }


`