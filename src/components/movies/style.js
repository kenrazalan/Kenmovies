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
        height: 100%;
    }
    .image-container{
       position: relative; 
       width: 100%;
       background-color: #131519;
       height: 286px;
       /* &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 100%;
            height: 99%;
            z-index: 0;
            
        } */
    }
    p {
         align-self: flex-start;
         font-size: 11px;
     }
    .release-date{
        margin-bottom: 15px;
        //font-size: 11px;
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
        //text-align: center;
        min-width: 30px;
        width: fit-content;
        padding: 1px 5px;
        border-radius: 3px;
        z-index:1;
    }

    .movies{
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
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
        }
        p {
            font-size: 14px;
        }
     }
     @media (min-width: 1536px) { 
        .image-container{
           // height: auto;
        }
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
        -webkit-animation-duration: 0.7s;
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