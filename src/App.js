import react from "react";
import RoundOne from "./components/roundedDesign/RoundOne";

function App() {
  return (
    <div className="w-full h-screen font-bodyfont text-textColor bg-black relative">
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <RoundOne />
      </div>
    </div>
  );
}

export default App;
