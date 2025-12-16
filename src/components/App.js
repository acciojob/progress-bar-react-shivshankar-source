 
 import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [per, setPer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPer(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


 return (
    <div class="parent">
        {/* Do not remove the main div */}
        <div id="barInner"></div>
        <div id="barOuter" style={{width:`${per}%`}}></div>

    </div>
  )
};

export default App;

 
 

