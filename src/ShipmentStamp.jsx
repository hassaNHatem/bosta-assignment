import { useContext } from "react"
import "./styles/shipmentStamp.css"
import { MyContext } from "./MyContext";

function ShipmentStamp(){
    const {lang} = useContext(MyContext)

    return <div className="stamp-container">
                <h4>{lang==="en"?'Shipment Details':'تفاصيل الشحنه'}</h4>
                <div className="stamp-details">
                    <table>
                        <tr>
                        <th>{lang==='en'?'branch':'الفرع'}</th>
                        <th>{lang==='en'?'date':'التاريخ'}</th>
                        <th>{lang==='en'?'time':'الوقت'}</th>
                        <th>{lang==='en'?'details':'التفاصيل'}</th>
                    </tr>
                    <tr>
                        <td>nasr city</td>
                        <td>05/04/2020</td>
                        <td>12:30pm</td>
                        <td>shipment created</td>
                    </tr>
                    <tr>
                        <td>nasr city</td>
                        <td>05/04/2020</td>
                        <td>12:30pm</td>
                        <td>shipment created</td>
                    </tr>
                    <tr>
                        <td>nasr city</td>
                        <td>05/04/2020</td>
                        <td>12:30pm</td>
                        <td>shipment created</td>
                    </tr>
                   
                    </table>
                </div>
            </div>
}
export default ShipmentStamp