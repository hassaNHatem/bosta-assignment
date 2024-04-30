import { useEffect, useRef, useState } from "react";
import "./styles/navbar.css"
import { IoMenu } from "react-icons/io5";
function NavBar(){
   const navRef = useRef();
   const [width, setWidth] = useState(window.innerWidth);
   const [displayMobileList , setDisplayMobileList] = useState(false)
    
    const showNavBar = ()=>{
        navRef.current.className.toggle("responsive_nav")
    }
     
    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 

    return <div className="nav-container">
                <div className="nav-flex">
                    <div className="logo">
                        bosta logo here
                    </div>
                    {width>1150&&<div ref={navRef} className="nav-links">
                    <ul className="middle-ul">
                        <li>main page</li>
                        <li>Prices</li>
                        <li>Contact Sales</li>
                    </ul>
                    <ul className="last-ul">
                        <li>Track your Shipment</li>
                        <li>Login</li>
                        <li>ع</li>
                    </ul>
                    </div>}
                    {width<=1150&&<div className="nav-btn"  onClick={()=>setDisplayMobileList((data)=>!data)}>
                        <IoMenu/>
                    </div>}
                </div>
                {displayMobileList&&<div className="mobile-display">
                <ul className="">
                        <li>main page</li>
                        <li>Prices</li>
                        <li>Contact Sales</li>
                        <li>Track your Shipment</li>
                        <li>Login</li>
                        <li>ع</li>
                    </ul>
                </div>}

          </div>
}
export default NavBar