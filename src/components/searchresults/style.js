import styled from 'styled-components'

export const SearchWrapper= styled.div`
    .search-container{
        padding:  0rem 10px;

    }

    .search-results {
        margin-top: 50px;
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
        .search-results{ 
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px 30px;
        }
        .search-container{
            padding:  0rem 40px;
        }
        
     }
     @media (min-width: 1024px) { 
        .search-results{ 
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
     }
     @media (min-width: 1536px) { 
        .search-results{ 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
     }
    .result{
        margin-bottom: 20px;
    }
    .search-header{
        margin-top: 150px;
        text-align: center;
    }
    h1, .total{
        text-align: center;
    }
    img{
        width: 100%;
        border-radius: 6px;
        height: auto;
    }
    /* @media screen and (max-width: 976px) {
        .search-results{           
            grid-template-columns: repeat(4,1fr);         
        }
    }
    @media screen and (max-width: 790px) {
        .search-results{
            grid-template-columns: repeat(3,1fr); 
            grid-gap: 0rem;
            padding: 0;
        }
        .search-header{
            margin-top: 100px;
        }
    }
    @media screen and (max-width: 480px) {
        .search-container{
            padding:  0;
        }
        .search-header{
            padding-left: 10%; 
        }
        .search-header{
            font-size: 17px;
        }
        .search-results{
            grid-template-columns: repeat(2,1fr); 
            
        }
        img{
            height: 230px !important;       
        }
        p{
            font-size: 12px;        
        }
        .result{
            max-width: 80%;
        }
    }
    @media screen and (max-width: 355px) {
        img{
            height: 210px !important;
        }
    } */
    
`