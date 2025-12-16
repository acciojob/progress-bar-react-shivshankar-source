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
    <div className="parent">

      <p>{per}%</p>

    
      <div id="barOuter">
     
        <div
          id="barInner"
          style={{ width: `${(per / 100) * 200}px` }}
        ></div>
      </div>
    </div>
  );
};

export default App;
