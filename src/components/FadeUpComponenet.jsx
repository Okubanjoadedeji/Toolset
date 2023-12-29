import { useState, useEffect } from "react";

function FadeUpComponent() {
  const [isFadedUp, setIsFadedUp] = useState(false);

  useEffect(() => {
    const fadeUp = () => {
      const fadeUpDiv = document.getElementById("fade-up");
      fadeUpDiv.style.opacity = 0; 
      fadeUpDiv.style.transition = "opacity 1.5s linear"; 
      

      setTimeout(() => {setIsFadedUp(true); }, 10);


    };

    fadeUp();
  }, []);

  return (
    <div id="fade-up" className="stage" style={{ opacity: isFadedUp ? 1 : 0 }}>
      <h1>Project V1</h1>
    </div>
  );
}

export default FadeUpComponent;
