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
        padding: 0px 10%; 
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
    .banner{
        height: 100%;
        width: 100%;
        position: relative;
        color:#fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:  0rem 4.8rem;
    }
    @media screen and (max-width: 790px) {

        img{
             height: 180px !important;
             width: 120px !important;
        }
        .banner{
            padding: 0;
            flex-direction: column-reverse; 
            justify-content: center !important;    
        }
        .banner-info{
          align-items: center;
          text-align: center;
        }
    }
    @media screen and (max-width: 480px) {
        h2{
            font-size: .9rem !important;          
        }
    }
    img{
        height: 400px;
        width: 300px;
        border-radius: 6px;
        box-shadow: 0 10px 30px rgb(0 0 0 / 30%);
        object-fit: cover;
    }
    .banner .banner-info {
        z-index: 4;
        max-width: 360px;
        //padding: 10rem 12rem 0;
        //height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;     
    }
    .banner .banner-info h1{
        font-size: 28px;
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