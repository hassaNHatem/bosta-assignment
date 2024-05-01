import { useContext, useEffect, useRef, useState } from "react";
import "./styles/navbar.css"
import { IoMenu } from "react-icons/io5";
import { MyContext } from "./MyContext";
import logo from './logo.png'
function NavBar(){
   const navRef = useRef();
   const [width, setWidth] = useState(window.innerWidth);
   const [displayMobileList , setDisplayMobileList] = useState(false)
   const {lang , setLang} = useContext(MyContext)
    
    const handleLanguagechange = ()=>{
        if(lang==='en'){
            setLang('ar')
        }else{
            setLang('en')
        }
       
    }
    const handleClasstoggle = ()=>{
        navRef.current.classToggle("rightToLeft")
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

    return <div className={"nav-container"}>

                <div ref={navRef}  className={lang==='en'?"nav-flex":"nav-flex rightToLeft"}>

                    <div className="logo">
                       <img src={logo} style={{width:'100%' , height:'100%'} }/>
                    </div>
                    {width>1150&&<div ref={navRef} className="nav-links">
                    <ul className="middle-ul">
                        <li >{lang==='en'?'main page':'الرئيسيه'}</li>
                        <li>{lang==='en'?'prices':'الاسعار'}</li>
                        <li>{lang==='en'?'contact sales':'كلم المبيعات'}</li>
                    </ul>

                    <ul className="last-ul">
                        <li>{lang==='en'?'Track your shipment':'تتبع شحنتك'}</li>
                        <li>{lang==='en'?'Login':'تسجيل دخول'}</li>
                        <li onClick={handleLanguagechange}> {lang==='en'?'ع':'ENG'}</li>
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