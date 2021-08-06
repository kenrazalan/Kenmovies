import styled from 'styled-components'

export const PeopleWrapper  = styled.div`
    .peoples-container{    

        //width:100%;
        padding:  0rem 10px;
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
    }
    .people{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    /* .peoples{      
        padding-bottom: 50px;
        margin-top: 50px;
        width:100%;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(5,1fr);
        grid-gap: 1.2rem;
    } */
    .peoples {
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
        .peoples{ 
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px 30px;
        }
        .peoples-container{
            padding:  0rem 40px;
        }
        h3{
            padding-top: 2rem;
            font-size: 20px;
        }
        
     }
     @media (min-width: 1024px) { 
        .peoples{ 
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
     }
     @media (min-width: 1536px) { 
        .peoples{ 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
     }

    .release-date{
        margin-bottom: 15px;
    }


    h3{
        text-align: center;
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