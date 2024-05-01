import { useContext, useState } from "react";
import { MyContext } from "./MyContext";
import "./styles/shipmentdetails.css"
import StepProgressBar from "./progress";

function ShipmentDetails(){
    const {lang , setLang} = useContext(MyContext)
    const [err , setErr] = useState()
    return<div className="details-container">
            <div className="top-section">
                <div className="shipment-num">
                    <h4>Shipment No.</h4>
                    <h3>Shipment Canceled</h3>
                </div>
                <div className="last-update">
                    <h4>Last Update</h4>
                    <h3>Monday at 5:33pm 06/04/2020</h3>
                </div>
                <div className="merchant-name">
                    <h4>Merchant Name</h4>
                    <h3>SOUQ.COM</h3>
                </div>
                <div className="deleviry-date">
                    <h4>delivery date</h4>
                    <h3>3 jan 2020</h3>
                </div>
            </div>
            <div className="bottom-section">
                <div className="progress-container">
                <StepProgressBar/>
                </div>
                <div className="steps-info">
                    <div className="shipment-creted">
                        <h4>Shipment Created</h4>
                        {err&&<h3>Shipment Canceled</h3>}
                    </div>
                    <div className="Shipment-received">
                        <h4>Shipment received from merchant</h4>
                        {err&&<h3>Shipment Canceled</h3>}
                    </div>
                    <div className="shipment-out">
                        <h4>Shipment is out for delivery</h4>
                        {err&&<h3>Shipment Canceled</h3>}
                    </div>
                    <div className="shipment-delivered">
                        <h4>Shipment delivered</h4>
                        {err&&<h3>Shipment Canceled</h3>}
                    </div>
                </div>
            </div>
        </div>
}
export default ShipmentDetails;