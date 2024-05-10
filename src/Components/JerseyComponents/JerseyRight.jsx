import React, { useRef, useEffect} from "react";

import rightsideStripes from "../../assets/jerseys/10/slicings/rightside-stripes.png"
import rightsideShoulder from "../../assets/jerseys/10/slicings/rightside-shoulder.png"


const JerseyRight = ({selectedvorNovImg}) => {
 
  const canvasRef = useRef(null);
console.log(selectedvorNovImg)
  const loadImages = async (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (error) => {
        console.error("Image loading failed:", img);
        reject(error);
      };
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });

    const drawImages = async () => {
      try {
        const [rightImg, rightSideStripesImg, rightSideShoulderImg] =
          await Promise.all([
            loadImages(selectedvorNovImg),
            loadImages(rightsideStripes),
            loadImages(rightsideShoulder),
          ]);

        context.clearRect(0, 0, canvas.width, canvas.height);

        // default shirt
        context.drawImage(rightImg, 10, 0, 300, 600);
        
        // Draw other default images
        const defaultImages = [
          {
            image: rightSideStripesImg,
            // color: shapeColors.FrontStripes,
            position: [10, 0],
          },
          {
            image: rightSideShoulderImg,
            // color: shapeColors.FrontShd,
            position: [10, 0],
          },
        ];

        defaultImages.forEach(({ image, position }) => {
          const tempCanvas = document.createElement("canvas");
          tempCanvas.width = 300;
          tempCanvas.height = 600;
          const tempContext = tempCanvas.getContext("2d");
          tempContext.drawImage(image, 0, 0, 300, 600);
         
          context.drawImage(tempCanvas, ...position);
        });
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    
   
    drawImages();
  }, [selectedvorNovImg]);

  
  
  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={600}
      // style={{ border: "1px solid black" }}
    />
  );
};

export default JerseyRight;
