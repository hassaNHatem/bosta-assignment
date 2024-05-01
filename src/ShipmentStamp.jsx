import "./styles/shipmentStamp.css"

function ShipmentStamp(){
    return <div className="stamp-container">
                <h4>Shipment Details</h4>
                <div className="stamp-details">
                    <table>
                        <tr>
                        <th>branch</th>
                        <th>date</th>
                        <th>time</th>
                        <th>details</th>
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