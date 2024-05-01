import { useContext, useState } from "react";
import { MyContext } from "./MyContext";
import "./styles/shipmentdetails.css"
import StepProgressBar from "./progress";

function ShipmentDetails(){
    const {lang , setLang} = useContext(MyContext)
    const [err , setErr] = useState()
    return<div className="details-container">
            <div className={lang==='en'?"top-section":"top-section rightToLeft"}>
                <div className="shipment-num">
                    <h4>{lang==="en"?'Shipment No.':'رقم الشحنه'}</h4>
                    <h3>{lang==="en"?'Shipment Canceled':'تم الغاء الشحنه'}</h3>
                </div>
                <div className="last-update">
                    <h4>{lang==='en'?'Last Update':'اخر تحديث'}</h4>
                    <h3>{lang==='en'?'Monday':'الاثنين'} at 5:33pm 06/04/2020</h3>
                </div>
                <div className="merchant-name">
                    <h4>{lang==='en'?'Merchant Name':'اسم التاجر'}</h4>
                    <h3>SOUQ.COM</h3>
                </div>
                <div className="deleviry-date">
                    <h4>{lang==='en'?'delivery date':'موعد التسليم خلال'}</h4>
                    <h3> {lang==='en'?'3 jan 2020':'2023 يناير '}3 </h3>
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