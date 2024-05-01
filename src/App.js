import './styles/main.css'
import { MyContext } from './MyContext';
import { useState } from 'react';
import NavBar from './NavBar';
import ShipmentDetails from './ShipmentDetails';

function App() {
  const [lang , setLang] = useState("en")
  return (
    <div>
  <MyContext.Provider value={{lang , setLang}}>
    <div className='container'>
    <NavBar/>
    </div>
    <div className='border'></div>
    <div className='container'>
      <ShipmentDetails/>
    </div>
  </MyContext.Provider>
  </div>
  );
}

export default App;
