import React, { useContext, useState } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { MyContext } from "./MyContext";
import { FaCheckCircle } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";
import { BsFillSaveFill } from "react-icons/bs";

function StepProgressBar () {
 
    const { shipmentDetails} = useContext(MyContext)
    const { CurrentStatus } = shipmentDetails
    const [currentpercent , setcurrentPercent] = useState(0)

    const handleColorChange = (state)=>{
      let msg = ""
      switch(state){
          case "CANCELLED":
              msg = "#F4050D"
          break;
          case "DELIVERED":
              msg = "#35B600"   
          break;
          case "DELIVERED_TO_SENDER":
              msg="#F9BA02"
              break;
          default:
          msg=""   
      }
      return msg
  }
    return (
      <ProgressBar
       
        percent={CurrentStatus.state==='CANCELLED'?67:100}
        filledBackground={handleColorChange(CurrentStatus.state)}
      >
        <Step transition="scale">
          {({ accomplished }) => (
            
            <FaCheckCircle style={{filter: `grayscale(${accomplished ? 0 : 80}%)` , fontSize:'2rem' , background: 'white',color:handleColorChange(CurrentStatus.state), borderRadius:'50%'} }/>
          
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
          
          <FaCheckCircle style={{filter: `grayscale(${accomplished ? 0 : 80}%)` , fontSize:'2rem' , background: 'white',color:handleColorChange(CurrentStatus.state), borderRadius:'50%'} }/>
         
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
           
           accomplished&&CurrentStatus.state!=='CANCELLED'? <FaCheckCircle style={{filter: `grayscale(${accomplished ? 0 : 80}%)` , fontSize:'2rem' , background: 'white',color:handleColorChange(CurrentStatus.state), borderRadius:'50%'} }/>:<FaTruckArrowRight style={{filter: `grayscale(${accomplished ? 0 : 80}%)` , fontSize:'2rem' , color: 'white',background:accomplished?handleColorChange(CurrentStatus.state):'grey', borderRadius:'50%' , border:"1px solid" , padding:'15px'} }/>
          
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
           
           accomplished&&CurrentStatus.state!=='CANCELLED'? <FaCheckCircle style={{filter: `grayscale(${accomplished ? 0 : 80}%)` , fontSize:'2rem' , background: 'white',color:handleColorChange(CurrentStatus.state), borderRadius:'50%'} }/>:<BsFillSaveFill style={{filter: `grayscale(${accomplished ? 0 : 80}%)` , fontSize:'2rem' , color: 'white',background:accomplished?handleColorChange(CurrentStatus.state):'grey', borderRadius:'50%' , border:"1px solid" , padding:'15px'} }/>
         
          )}
        </Step>
      </ProgressBar>
    );
  
}
export default StepProgressBar