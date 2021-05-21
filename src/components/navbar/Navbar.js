import React,{useState,useEffect} from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { NavWrapper } from './style';




function Navbar() {
    const [showNavBg,setShowNavBg]=useState(false)
    const [value,setValue] = useState("")
    const [showMenu,setShowMenu] = useState(true)
    const history = useHistory();

    useEffect(()=>{
        if(window.scrollY >= 30){
            setShowNavBg(true)
        }
        window.addEventListener('scroll',scrolled)
        return ()=>window.removeEventListener
    },[])

    const handleSearch = () => {
        if(value.length !== 0){
            history.push(`/search/${value}`);
            setShowMenu(true)
            setValue("")
        }
        setShowMenu(true)
	};
    const toggleMenu = () =>{
        setShowMenu(!showMenu)
    }

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
               
                <h1 className="pointer" onClick={()=>{history.push(`/`);setShowMenu(true)}}>KEN MOVIES</h1>
            <i onClick={toggleMenu} className="menu-icon fas fa-bars"></i>


            <div className="links-container">
                <ul>
                 <Links2/>   
                </ul> 
                <form className="nav-search">
                    <input type="text" value={value} onChange={ ((e)=>setValue(e.target.value) ) }  placeholder="Search Movies" />
                    <button className="search-btn" onClick={handleSearch}></button>
                </form>
            </div>

            { !showMenu && <div className="dropdown-menu">
                <form className="nav-search">
                    <input type="text" value={value} onChange={ ((e)=>setValue(e.target.value) ) } placeholder="Search Movies" />
                    <button className="search-btn" onClick={handleSearch}></button>
                </form>
                <Links toggleMenu={toggleMenu}/>
            </div>}
   
            </nav>
            
        </div>
       
        </NavWrapper>
    )
}
const Links2 =()=>{
   return[
         <NavLink exact={true} activeClassName="active" to={'/'} >Home</NavLink>,
         <NavLink activeClassName="active" to={'/upcoming'} >Upcoming</NavLink>,
         <NavLink activeClassName="active" to={'/popular'} >Popular</NavLink>,
         <NavLink activeClassName="active" to={'/people'} >People</NavLink>,
         <NavLink activeClassName="active" to={'/genres'} >Genres</NavLink>
      ]
   }  

const Links =({toggleMenu})=>{
    return[
          <NavLink exact={true} activeClassName="active" to={'/'} onClick={()=>toggleMenu()}>Home</NavLink>,
          <NavLink activeClassName="active" to={'/upcoming'} onClick={()=>toggleMenu()}>Upcoming</NavLink>,
          <NavLink activeClassName="active" to={'/popular'} onClick={()=>toggleMenu()}>Popular</NavLink>,
          <NavLink activeClassName="active" to={'/people'} onClick={()=>toggleMenu()}>People</NavLink>,
          <NavLink activeClassName="active" to={'/genres'} onClick={()=>toggleMenu()}>Genres</NavLink>,
       ]
    }  
    

export default Navbar
