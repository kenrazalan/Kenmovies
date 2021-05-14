import styled from 'styled-components'

export const PersonsWrapper  = styled.div`
    .persons-container{
        width:100%;
        padding:  0rem 4.8rem;
        min-height:100vh;
        height: auto;
        margin: 0 auto;
        background-size: cover;
        //background-position: center;
        object-fit: contain;
        position: relative; 
        padding: 0px 10%; 
    }
    .persons-container::before{      
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
    .view{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:  0rem 0rem 12rem ;
    }

    .person{
        width: 100%;
        height:100%;
        color:#fff;
        display: flex;
       
        justify-content: left;
    }
    .person-info{
        z-index: 4;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        padding-left: 50px;
        width: 100%;
         
    }
    .person-info h1{
        font-size: 28px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }
    .person-info h2{
        font-size: 1.3rem;
        font-weight: normal;  
        
    }
    .biography{
        padding: 15px 0 20px;
    }
    img{
        height: 400px;
        min-width: 300px;
        border-radius: 6px;
        box-shadow: 0 10px 30px rgb(0 0 0 / 30%);
        object-fit: cover;
        z-index: 4;
        margin: auto;
    }
    @media screen and (max-width: 790px) {
    .person{
        padding: 0;
        flex-direction: column; 
        justify-content: center !important;    
    }
    .person-info{
        padding: 0;
    }
    img{
        height: 300px !important;
        min-width: 200px !important;
        padding-right: 0;
        margin: 0;
    }
    h1{
        font-size: 21px !important;
        padding-top: 12px;
    }
    h2{
        font-size: 1rem !important;
    }
}
`