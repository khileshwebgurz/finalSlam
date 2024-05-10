import React, { useRef, useEffect } from "react";
// front side view
import shirtImage from "../../assets/jerseys/10/slicings/crew_back_narrow_shoulder.png"
import backStripes from "../../assets/jerseys/10/slicings/back-stripes.png"





const JerseyBack = ({ selectedShoulderImage}) => {

  

  const canvasRef = useRef(null);

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
       
          
          const [defaultShirt, defaultShoulder, defaultBackStripes] = await Promise.all([
            loadImages(shirtImage),
            loadImages(selectedShoulderImage),
            loadImages(backStripes),
          
           

          ]);


          context.clearRect(0, 0, canvas.width, canvas.height);
          
          // default shirt
          context.drawImage(defaultShirt, 10, 30, 300, 600);
         
          // Draw other default images
          const defaultImages = [
            {
              image: defaultShoulder,
              // color: shapeColors.FrontShd,
              position: [10, 30],
            },
            {
              image: defaultBackStripes,
              // color: shapeColors.FrontStripes,
              position: [10, 30],
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
  
    }, [selectedShoulderImage]);
  
   
  
    return (
      <canvas
        ref={canvasRef}
        width={300}
        height={600}
        // style={{ border: "1px solid black" }}
      />
    );
  };
  
  export default JerseyBack;