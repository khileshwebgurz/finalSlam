import React from "react";
import Neck from "./UniformElements/Neck.jsx";
import NeckImgeList from "./UniformStore/NeckStore.jsx"
import Shoulder from "./UniformElements/Shoulder.jsx";
import ShoulderImages from "./UniformStore/ShoulderStore.jsx"

import Vtype from "./UniformElements/Vtype.jsx";
import Color from "./UniformElements/Color.jsx";
import Canvas from "./UniformElements/Canvas.jsx";

import vleftside from "../assets/jerseys/10/slicings/crew_leftside.png"
import vrightside from "../assets/jerseys/10/slicings/crew_rightside.png"
import noVLeftSide from "../assets/jerseys/10/slicings/crew_noV_leftside.png"
import noVRightSide from "../assets/jerseys/10/slicings/crew_noV_rightside.png"
import { useState } from "react";

export default function CustomisableUniformSlices() {

  // state for selected Neck Options
  const [selectedNeckImage, setSelectedNeckImage] = useState(NeckImgeList[0].src);

  // callback function for getting selected neck from options
  const handleNeckImageSelect = (neckImage) => {
    setSelectedNeckImage(neckImage);
  };

  // state for selected shoulder Image
  const [selectedShoulderImage, setSelectedShoulderImage] = useState({
    frontassociate: ShoulderImages[0].frontassociate,
    backassociate: ShoulderImages[0].backassociate
  })

  // callback function for getting selected shoulder from option
  const handleShoulderImageSelect = (shoulderImage) =>{
    setSelectedShoulderImage(shoulderImage)
  }

  // state for cut or no cut image
  const [selectedCutorNoCut, setSelectedCutorNoCut] = useState({
    left : noVLeftSide, right: noVRightSide
  })

  const handleVorNoVImageSelect = (type) => {
    if (type === "v") {
     setSelectedCutorNoCut({left:vleftside, right: vrightside})
    } else if (type === "noV") {
      setSelectedCutorNoCut({left: noVLeftSide, right: noVRightSide})
    }
  };
 
 


 
  return (
    <>
      <div id="" className="customize-uniform">
        <div className="header-sec">
          <h3>
            Customize Your Uniform
            <a style={{ float: "right" }} className="btn-design fos">
              Fit on Screen
            </a>
          </h3>
          <span className="open-option">&#9776;</span>
        </div>
        <div
          id="customize-uniform_here"
          className="customize-layout flex-row fosCls"
        >
          <div className="customize-option">
            <ul className="accordion-list list-unstyled">
              <Neck onNeckSelect={handleNeckImageSelect} />
              <Shoulder onShoulderSelect ={handleShoulderImageSelect} />
              <Vtype onImageSelect={handleVorNoVImageSelect} />
              <Color />
            </ul>
          </div>
          <Canvas selectedNeckImage={selectedNeckImage} selectedShoulderImage={selectedShoulderImage} selectedCutorNoCut={selectedCutorNoCut}/>
         
        </div>
      </div>
    </>
  );
}
