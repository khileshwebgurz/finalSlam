import React, { useRef, useEffect } from "react";
// front side view
import shirtImage from "../../assets/jerseys/10/slicings/crew_front_narrow_shoulder.png"
import frontStripes from "../../assets/jerseys/10/slicings/front-stripes.png"


const JerseyFront = ({
  
  selectedNeckImage,
  selectedShoulderImage,
}) => {
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
        const [
          shirt,
          shoulderImg,
          frontStripesImg,
          selectedImg,
        ] = await Promise.all([
          loadImages(shirtImage),
          loadImages(selectedShoulderImage),
          loadImages(frontStripes),
          loadImages(selectedNeckImage),
        ]);


        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw shirt
        context.drawImage(shirt, 10, 30, 300, 600);
      
        // Draw other images
        const images1 = [
          {
            image: shoulderImg,
         
            position: [10, 30],
          },
          {
            image: frontStripesImg,
           
            position: [10, 30],
          },
          
        ];

        if (selectedNeckImage) {
          // temp canvas for the neck options
          const tempCanvasbackStr = document.createElement("canvas");
          tempCanvasbackStr.width = 180;
          tempCanvasbackStr.height = 120;
          const textContextbackStr = tempCanvasbackStr.getContext("2d");
          textContextbackStr.drawImage(selectedImg, -9, -5, 180, 120);
          context.drawImage(tempCanvasbackStr, 80, 30);
        }

        images1.forEach(({ image, position }) => {
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
  }, [selectedNeckImage,selectedShoulderImage]);

  

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={600}
    //  style={{'border': '1px solid black'}}
    />
  );
};

export default JerseyFront;
