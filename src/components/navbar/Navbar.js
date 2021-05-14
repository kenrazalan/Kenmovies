import React,{useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

const NavWrapper = styled.div`
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
        margin: 0 1.6rem;
        cursor: pointer;
    }
    @media screen and (max-width: 790px) {
        .links-container{
            display: none;
        }
    h1{
        font-size: 17px;
        letter-spacing: 2px;
        
    }
}

`

function Navbar() {
    const [showNavBg,setShowNavBg]=useState(false)
    const history = useHistory();
    useEffect(()=>{
        if(window.scrollY >= 30){
            setShowNavBg(true)
        }
        window.addEventListener('scroll',scrolled)
        return ()=>window.removeEventListener
    },[])

    const scrolled=()=>{
        if(window.scrollY >= 30){
            setShowNavBg(true)
        }
        else{
            setShowNavBg(false)
        }
    }

    return (
        <NavWrapper>
        <div className="navbar-container">
            <nav style={{ 
                 backgroundColor:showNavBg && '#111',
                 boxShadow:showNavBg && '0px 0px 10px rgba(0,0,0,0.5)'
                }}>
               
                <h1 className="pointer" onClick={()=>history.push(`/`)}>KEN MOVIES</h1>

            <div className="links-container">
                <Links/>
            </div>
   
            </nav>
            
        </div>
        </NavWrapper>
    )
}

const Links =({toggleMenu})=>
    <ul>
        <li><a onClick={toggleMenu} >Home</a></li>
        <li><a onClick={toggleMenu}  >Upcoming</a></li>
        <li><a onClick={toggleMenu}  >Discover</a></li>
        <li><a onClick={toggleMenu}  >Trending</a></li>
        <li><a onClick={toggleMenu}  >People</a></li>
        <li><a onClick={toggleMenu}  >Genres</a></li>
    </ul>

export default Navbar
