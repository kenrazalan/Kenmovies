import React,{useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

const NavWrapper = styled.div`
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
    }
    p{
        padding-left: 2%;
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
               
                    <p className="bold pointer" onClick={()=>history.push(`/`)}>Kenneth</p>
                
                
            </nav>
            
        </div>
        </NavWrapper>
    )
}

export default Navbar
