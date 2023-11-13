import { useEffect } from "react";

import initRDW from "./initRDW";



function App() {
  useEffect(() => {
    initRDW();
  }, []);
  return <div className="rdw-container" style={{width: "500px"}} />;
}

export default App
