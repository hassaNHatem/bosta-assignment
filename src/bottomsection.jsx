import ShipmentAdress from "./ShipmentAdress"
import ShipmentStamp from "./ShipmentStamp"
import "./styles/bottomsection.css"

function BottomSection (){
    return <div className="bottom-section-container">
                <ShipmentStamp/>
                <ShipmentAdress/>
            </div>
}
export default BottomSection