import "./styles/shimpentAdress.css"

function ShipmentAdress(){
    return <div className="address-container">
        <h4>Delivery Address</h4>
        <div className="address-details">
            some long address as a place holder for a real address when integrated with the backend
        </div>
        <div className="report">
            <div className="report-icon">
                icon placeholder
            </div>
            <div className="cto">
                <h5>is there a problem with your shipment?!</h5>
                <button>report an issue</button>
            </div>
        </div>
    </div>
}
export default ShipmentAdress