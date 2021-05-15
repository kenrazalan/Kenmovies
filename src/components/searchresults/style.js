import styled from 'styled-components'

export const SearchWrapper= styled.div`
    .search-container{
        width:100%;
        padding:  0rem 4.8rem;
        height:100vh;
        //position: relative; 
        //padding: 0px 10%; 
    }
    .search-results{
        padding-bottom: 60px !important;
        margin-top: 50px;
        width:100%;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(5,1fr);
        grid-gap: 1.2rem;
       // background: green;
    }
    .result{
        margin-bottom: 20px;
    }
    .search-header{
        margin-top: 150px;
    }
    img{
        border-radius: 6px;
        height: 270px;
    }
    @media screen and (max-width: 976px) {
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
    }
    
`