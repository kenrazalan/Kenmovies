import React,{useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { NavWrapper } from './style';




function Navbar() {
    const [showNavBg,setShowNavBg]=useState(false)
    const [value,setValue] = useState("")
    const history = useHistory();

    useEffect(()=>{
        if(window.scrollY >= 30){
            setShowNavBg(true)
        }
        window.addEventListener('scroll',scrolled)
        return ()=>window.removeEventListener
    },[])

    const handleSearch = () => {
		history.push(`/search/${value}`);
	};

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
                <form className="nav-search">
                    <input type="text" value={value} onChange={ ((e)=>setValue(e.target.value) ) } />
                    <button className="search-btn" onClick={handleSearch}></button>
                </form>
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
