import React from "react";
import { CirclePicker } from "react-color";
import { useState } from "react";
export default function Color() {
  const [showColor, setShowColor] = useState(false);
  const handleClick = () => {
    setShowColor(!showColor);
  };

  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    onChange(color.hex); // Pass the selected color to the parent component
  };

  return (
    <>
      <li className={`color-uniform ${"color-uniform-layer" ? "active" : ""}`}>
        <h3 onClick={() => handleTab("color-uniform-layer")}>Color Uniform</h3>
        <div className="answer-wrap">
          <div className="answer">
            <div className="customize-prod-list scrollbar">
              <div className="wraper">
                {/* <h4 className="customize-heading">Uniform Colors</h4> */}
                <div className="color-row">
                <button className="btn btn-primary" onClick={handleClick}>Uniform Colors</button>
                {showColor && <CirclePicker color={selectedColor} onChange={handleColorChange} />}
                  {/* {uniformColor.map((color, index) => {
                    if (uniformData.uniform_layers >= index) {
                      return (
                        <ColorList
                          color={uniformData[color.value]}
                          key={index}
                          indexData={index}
                          containerID={color.containerID}
                          id={color.id}
                          handleColorTab={handleColorTab}
                          colorTab={colorTab}
                          canvasId={color.canvasId}
                        />
                      );
                    }
                    return null;
                  })} */}
                </div>
              </div>
              <div className="wraper">
                <h4 className="customize-heading">Neck Colors</h4>
                <div className="color-row">
                  {/* {neckColor.map((color, index) => {
                    const isIndex2 = index === 2;

                    if (!isIndex2 || isAllowedNeckStyle) {
                      return (
                        <ColorList
                          color={uniformData[color.value]}
                          key={index}
                          indexData={index}
                          containerID={color.containerID}
                          id={color.id}
                          handleColorTab={handleColorTab}
                          colorTab={colorTab}
                          canvasId={color.canvasId}
                        />
                      );
                    }

                    return null;
                  })} */}
                </div>
              </div>
              <div className="wraper">
                <h4 className="customize-heading">Shoulder Style Colors</h4>
                <div className="color-row">
                  {/* {shoulderColor.map((color, index) => {
                    if (uniformData.shoulder_layers >= index) {
                      return (
                        <ColorList
                          color={uniformData[color.value]}
                          key={index}
                          indexData={index}
                          containerID={color.containerID}
                          id={color.id}
                          handleColorTab={handleColorTab}
                          colorTab={colorTab}
                          canvasId={color.canvasId}
                        />
                      );
                    }
                    return null;
                  })} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
