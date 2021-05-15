import styled from 'styled-components'

export const NavWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    .navbar-container{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    nav{
        width:100%;
        height:70px;
        position: fixed;
        top:0;
        display: flex;
        align-items: center;
        z-index: 10;
        transition: .4s;
    }
    h1{
        padding-left: 7%;
        letter-spacing: 4px;
        font-weight: 700;
        font-size: 27px;
        font-family: 'Oswald', sans-serif;
    }
    .links-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
    }
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.4rem;
        letter-spacing: .5px;
        padding: 2rem;

    }
    li{
        margin: 0 1rem;
        cursor: pointer;
    }
    @media screen and (max-width: 860px) {
        .links-container{
            display: none;
        }

        li{
            display: none;
        }
    }

    @media screen and (max-width: 790px) {

    h1{
        font-size: 17px;
        letter-spacing: 2px;
        
    }
}

`