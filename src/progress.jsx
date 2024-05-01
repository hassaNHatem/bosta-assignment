import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
 
class StepProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar
       
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />
          
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
          
           <img
             style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
             width="50"
             src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
           />
         
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
           
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />
          
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
           
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height={"50px"}
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />
         
          )}
        </Step>
      </ProgressBar>
    );
  }
}
export default StepProgressBar