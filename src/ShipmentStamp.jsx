import { useContext } from "react"
import "./styles/shipmentStamp.css"
import { MyContext } from "./MyContext";

function ShipmentStamp(){
    const {lang ,  shipmentDetails} = useContext(MyContext)
    const {provider, CurrentStatus , TrackingNumber , PromisedDate , TransitEvents} = shipmentDetails
    const handleTranlation = (english)=>{
        switch(english){
            case "TICKET_CREATED":
                return "تم انشاء الشحنه"
            case "PACKAGE_RECEIVED":
                return "تم استلام الشحنه من التاجر"
            case "OUT_FOR_DELIVERY":
                return "الشحنه خرجت للتسليم"
            case 'PACKAGE_RECEIVED':
                return "تم استلام الشحنه"
            case "NOT_YET_SHIPPED":
                return "لم يتم الشحن بعد"
            case "IN_TRANSIT":
                return 'الشحنه في الطريق'
            case "WAITING_FOR_CUSTOMER_ACTION":
                return "في انتظار رد العميل"
            case "DELIVERED":
                return "تم تسليم الشحنه"
            case "CANCELLED":
                return "تم الغاء الشحنه"
            
        }
    }
    function formatAMPM(date) {
        const newdate = new Date(date);
        var hours = newdate.getHours();
        var minutes = newdate.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
      const formatDate = (date)=>{
        const newdate = new Date(date);
        let day = newdate.getUTCDate(); 
        let month = newdate.getUTCMonth() + 1; 
        let year = newdate.getUTCFullYear(); 
        return `${formatAMPM(newdate)} ${day}/${month}/${year}` 
    }
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
                    {TransitEvents.map(el=>{
                        console.log(el.timestamp)
                        return(
                            <tr>
                            <td>{lang==='en'?el.hub?el.hub:"Unknown":el.hub?el.hub:"غير معروف"}</td>
                            <td>{formatDate(el.timestamp)}</td>
                            <td>{formatAMPM(el.timestamp)}</td>
                            <td>{lang==='en'?el.state.replaceAll("_" , " "):handleTranlation(el.state)}</td>
                        </tr> 
                        )
                    })}
                 
                   
                    </table>
                </div>
            </div>
}
export default ShipmentStamp