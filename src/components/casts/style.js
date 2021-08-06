import styled from 'styled-components'

export const CastsWrapper  = styled.div`
    .casts-container{
        //width:100%;
        min-height: 33vh;
        padding:  0rem 10px;
    }
    .cast-container {
        position: relative; 
       width: 100%;
       background-color: #131519;
       height: 286px;
    }
    .casts {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
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
        .casts{ 
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px 30px;
        }
        .casts-container{
            padding:  0rem 40px;
        }
        
     }
     @media (min-width: 1024px) { 
        .casts{ 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
     }

    img{
        width: 100%;
        border-radius: 6px;
        height: 100%;
    }
    .character{
        font-size: 11px;
    }
    .title{
        padding: 2rem 0 0 2rem;
    }
    .img-loading {
        opacity: 0;
        width: 100%;
        height: 100%;
        position: relative;
        object-fit: cover;
    }



    .img-loaded {
        animation: fadeInImg .5s cubic-bezier(0.23, 1, 0.32, 1);
        position: relative;
        opacity: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
        -webkit-animation-duration: 0.4s;
        animation-duration: 0.7s;
        animation-delay: 0.1s;
    }


    .lazyload-wrapper{
        transition: all 0.3s ease-in-out 0s;
        width: 100%;
        height: 100%;
    }

    @keyframes fadeInImg {
        to {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeInImg {
            to {
            opacity: 1;
        }
    }

    `