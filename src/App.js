import './styles/main.css'
import { MyContext } from './MyContext';
import { useState } from 'react';
import NavBar from './NavBar';
import ShipmentDetails from './ShipmentDetails';
import BottomSection from './bottomsection';
import TrackShipment from './TrackShipment';

function App() {
  const [lang , setLang] = useState("en")
  const [onTrackShipment , setOnTrackShipment] = useState(false)

  return (
    <div>
  <MyContext.Provider value={{lang , setLang , onTrackShipment , setOnTrackShipment}}>
    <div className='container'>
    <NavBar/>
    </div>
    <div className='border'></div>
    <div className='container'>
      <ShipmentDetails/>
      <BottomSection/>
    </div>
    {onTrackShipment&&<TrackShipment/>}
  </MyContext.Provider>
  </div>
  );
}

export default App;
