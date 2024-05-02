import { useContext, useState } from "react";
import { MyContext } from "./MyContext";
import "./styles/shipmentdetails.css"
import StepProgressBar from "./progress";

function ShipmentDetails(){
const dayNames = ["Sunday" , "Monday" , "Tuesday" , "Wendesday" , "Thursday" , "Friday" , "Saturday"]
const dayNamesArabic = ["الاحد" , "الاثنين" , "الثلاثاء" , "الاربعاء" , "الخميس" , "الجمعه" , "السبت"]
    const handleTranslation = (english)=>{
        let msg = ""
        switch(english){
            case "CANCELLED":
                msg = "تم الغاء الشحنه"
            break;
            case "DELIVERED":
                msg = 'تم تسليم الشحنه'
            break;
            case "DELIVERED_TO_SENDER":
                msg= "تم تسليم الشحنه الي المرسل"
                break;
            default:
            msg=""   
        }
        return msg
    }

    const handleColorChange = (state)=>{
        let msg = ""
        switch(state){
            case "CANCELLED":
                msg = "red"
            break;
            case "DELIVERED":
                msg = "green"
            break;
            case "DELIVERED_TO_SENDER":
                msg="yellow"
                break;
            default:
            msg=""   
        }
        return msg
    }
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
    const getDay = (date)=>{
        const newdate = new Date(date);
        return newdate.getDay()
    }

    const formatDate = (date)=>{
        const newdate = new Date(date);
        let day = newdate.getUTCDate(); 
        let month = newdate.getUTCMonth() + 1; 
        let year = newdate.getUTCFullYear(); 
        return ` at ${formatAMPM(newdate)} ${day}/${month}/${year}` 
    }
    const {lang , onTrackShipment , shipmentDetails} = useContext(MyContext)
    const {provider, CurrentStatus , TrackingNumber , PromisedDate} = shipmentDetails
    const [err , setErr] = useState()
    return<div className={onTrackShipment?"details-container track-active":"details-container"}>
            <div className={lang==='en'?"top-section":"top-section rightToLeft"}>
                <div className="shipment-num">
                    <h4>{lang==="en"?`Shipment No. ${TrackingNumber}`:`رقم الشحنه ${TrackingNumber}`}</h4>
                    <h3 className={handleColorChange(CurrentStatus.state)}>{lang==="en"?CurrentStatus.state:handleTranslation(CurrentStatus.state)}</h3>
                </div>
                <div className="last-update">
                    <h4>{lang==='en'?'Last Update':'اخر تحديث'}</h4>
                    <h3>{lang==='en'?dayNames[getDay(CurrentStatus.timestamp)]:dayNamesArabic[[getDay(CurrentStatus.timestamp)]]} {formatDate(CurrentStatus.timestamp)}</h3>
                </div>
                <div className="merchant-name">
                    <h4>{lang==='en'?'Merchant Name':'اسم التاجر'}</h4>
                    <h3>{provider}</h3>
                </div>
                <div className="deleviry-date">
                    <h4>{lang==='en'?'delivery date':'موعد التسليم خلال'}</h4>
                    <h3> {lang==='en'?dayNames[getDay(PromisedDate)]:dayNamesArabic[[getDay(PromisedDate)]]} {formatDate(PromisedDate)} </h3>
                </div>
            </div>
            <div className={lang==='en'?"bottom-section":"bottom-section rightToLeft"}>
                <div className="progress-container">
                <StepProgressBar/>
                </div>
                <div className="steps-info">
                    <div className="shipment-creted">
                        <h4>{lang==='en'?'Shipment Created':'تم انشاء الشحنه'}</h4>
                        {err&&<h3>Shipment Canceled</h3>}
                    </div>
                    <div className="Shipment-received">
                        <h4>{lang==='en'?'Shipment received from merchant':'تم استلام الشحنه من التاجر'}</h4>
                        {err&&<h3>Shipment Canceled</h3>}
                    </div>
                    <div className="shipment-out">
                        <h4>{lang==='en'?'Shipment is out for delivery':'الشحنه خرجت للتسليم'}</h4>
                        {err&&<h3>Shipment Canceled</h3>}
                    </div>
                    <div className="shipment-delivered">
                        <h4>{lang==='en'?'Shipment delivered':'تم التسليم'}</h4>
                        {err&&<h3>Shipment Canceled</h3>}
                    </div>
                </div>
            </div>
        </div>
}
export default ShipmentDetails;