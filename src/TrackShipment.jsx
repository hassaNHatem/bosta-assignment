import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { MyContext } from "./MyContext";
function TrackShipment(){
    const {lang } = useContext(MyContext)

    return <div className={lang==='en'?"track-shipment-container":"track-shipment-container RightToLeft"}>
                <h4>{lang==='en'?"Track Your Shipmen":"تتبع شحنتك"}</h4>
                <div className="search"> 
                    <span><CiSearch/></span> <input type="search" placeholder={lang==='en'?"shipment number":"رقم التتبع"}/>
                </div>
            </div>
}

export default TrackShipment