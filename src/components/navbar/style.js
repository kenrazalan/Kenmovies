import styled from 'styled-components'

export const NavWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    .navbar-container{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    nav{
        max-width: 1360px;
        margin: 0 auto;
        width:100%;
        height:70px;
        position: fixed;
        top:0;
        display: flex;
        align-items: center;
        z-index: 10;
        transition: .4s;
        justify-content: space-between;
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
    .links-container a {
        font-size: 16px;
    }
    .links-container ul {
        margin-left: 30px;
    }
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.4rem;
        letter-spacing: .5px;
        padding: 2rem;

    }
    a{
        margin: 0 1rem;
        cursor: pointer;
        font-weight: bold;
        
    }
    .dropdown-menu{
        position: absolute;
        top: 70px;
        left: 0;
        background: rgb(17, 17, 17);
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .dropdown-menu a{
        font-size: 30px;
        padding: 10px 0;
        font-weight: bold;
    }
    .dropdown-menu .nav-search{
        //width: 100%;
        margin: 20px 0 0 0;
    }
    .react-reveal{
        animation-duration: 300ms !important;
    }

    .nav-search{
    background-color: #fff;
	position: relative;
	display: flex;
	//width: 100%;
	//height: 100%;
	min-height: 40px;
	align-items: center;
	padding-left: 16px;
	padding-right: 5px;
	border-radius: 3px;
	box-sizing: border-box;
	justify-content: space-between;
	max-width: 550px;
    margin-right: 50px;
    }
    .nav-search input{
    border: 0;
	outline: none;
	width: 100%;
	height: 40px;
	margin: 0;
	padding: 0;
	font-size: 15px;
    }
    .search-btn{
        background-image: url("data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 47 (45396) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Esearch%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='new' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='desktop-header-states' transform='translate(-790.000000, -205.000000)'%3E %3Cg id='Default' transform='translate(215.000000, 179.000000)'%3E %3Cg id='search' transform='translate(245.000000, 16.000000)'%3E %3Cg transform='translate(282.000000, 6.000000)'%3E %3Cg transform='translate(44.000000, 0.000000)'%3E %3Cpolygon points='0 0 24 0 24 24 0 24'%3E%3C/polygon%3E %3Cpath d='M14.8938098,13.4722306 L20,18.5 L18.5,20 L13.4722306,14.8938098 C12.4922065,15.5904094 11.2939357,16 10,16 C6.6862915,16 4,13.3137085 4,10 C4,6.6862915 6.6862915,4 10,4 C13.3137085,4 16,6.6862915 16,10 C16,11.2939357 15.5904094,12.4922065 14.8938098,13.4722306 Z M10,14 C12.209139,14 14,12.209139 14,10 C14,7.790861 12.209139,6 10,6 C7.790861,6 6,7.790861 6,10 C6,12.209139 7.790861,14 10,14 Z' fill='%23000000' fill-rule='nonzero'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E");
        background-size: 16px;
        width: 40px;
	    height: 40px;
        background-position: center;
	    background-repeat: no-repeat;
        outline: none;
	    cursor: pointer;
	    background-color: #fff;
        border: none;
    }
    .menu-icon{
        margin-right: 20px;
        padding: 15px;
    }
    .active{
        color: #3bb33b !important;
    }
    @media screen and (min-width: 860px) {
        .menu-icon{
            display: none;
        }
    }
    @media screen and (max-width: 860px) {
        .links-container{
            display: none;
        }
    }

    @media screen and (max-width: 790px) {

    h1{
        font-size: 17px;
        letter-spacing: 2px;
        
    }
    .nav-search,.nav-search input,.search-btn{

    }
}

`