import { useContext } from "react"
import ShipmentAdress from "./ShipmentAdress"
import ShipmentStamp from "./ShipmentStamp"
import "./styles/bottomsection.css"
import { MyContext } from "./MyContext"

function BottomSection (){
    const {lang} = useContext(MyContext)
    return <div className={lang==='en'?"bottom-section-container":"bottom-section-container rightToLeft"}>
                <ShipmentStamp/>
                <ShipmentAdress/>
            </div>
}
export default BottomSection