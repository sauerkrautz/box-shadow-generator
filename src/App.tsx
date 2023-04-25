import { useState } from "react";
import { collection, color, shadow, shadows } from "./types/types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Box from "./components/Box";
import Gradient from "./components/Gradient";

// const shadowContext = createContext({
//   hOffset: 0,
//   vOffset: 0,
//   blur: 0,
//   spread: 0,
//   color: "#000000",
//   setShadows: undefined,
// });

function App() {
  const [shadow, setShadow] = useState<shadow>({
    hOffset: 20,
    vOffset: 20,
    blur: 20,
    spread: 20,
    color: "#000000",
    boxColor: "#ff0000",
  });

  const [gradient, setGradient] = useState({});

  const [colors, setColors] = useState<color[]>([
    {
      color: "#ffffff",
      stop: 20,
    },
  ]);

  const [color, setColor] = useState<color>({
    color: "#ffffff",
    stop: 20,
  });

  const collection: collection = { colors, setColors, color, setColor };

  const shadows: shadows = { shadow, setShadow };

  return (
    <div className="w-full min-h-[100dvh] bg-[#252525] flex justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Box shadows={shadows} />} />
          <Route
            path="/gradient"
            element={<Gradient collection={collection} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
