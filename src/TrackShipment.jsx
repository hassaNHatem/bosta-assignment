import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MyContext } from "./MyContext";
import axios from "axios";
function TrackShipment(){
    const [shipmentno , setShipmentNo] = useState()
    const {lang ,setShipmentDetails} = useContext(MyContext)
    const handleShipmentApi = ()=>{
        axios.get(`https://tracking.bosta.co/shipments/track/${shipmentno}`).then(res=>{
            console.log(res.data)
            setShipmentDetails(res.data)
        })
    }
    return <div className={lang==='en'?"track-shipment-container":"track-shipment-container RightToLeft"}>
                <h4>{lang==='en'?"Track Your Shipmen":"تتبع شحنتك"}</h4>
                <div className="search"> 
                    <span onClick={handleShipmentApi}><CiSearch/></span> <input type="search" onKeyUp={(e)=>{
                        if(e.keyCode===13){
                            handleShipmentApi()
                        }
                    }} onChange={(e)=>setShipmentNo(e.target.value)} placeholder={lang==='en'?"shipment number":"رقم التتبع"}/>
                </div>
            </div>
}

export default TrackShipment