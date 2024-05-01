import "./styles/shimpentAdress.css"
import question from './question.svg'
import { MyContext } from "./MyContext"
import { useContext } from "react"
function ShipmentAdress(){
    const {lang} = useContext(MyContext)

    return <div className="address-container">
        <h4>{lang==="en"?'Delivery Address':'عنوان التسليم'}</h4>
        <div className="address-details">
            some long address as a place holder for a real address when integrated with the backend
        </div>
        <div className="report">
            <div className="report-icon">
               <img src={question}/>
            </div>
            <div className="cto">
                <h5>{lang==='en'?'is there a problem with your shipment?!':'هل يوجد مشكله في شحنتك؟'}</h5>
                <button>{lang==='en'?'report an issue':'الابلاغ عن مشكله'}</button>
            </div>
        </div>
    </div>
}
export default ShipmentAdress