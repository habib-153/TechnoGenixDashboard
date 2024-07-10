import "./App.css";
import Bottom from "./Bottom";
import Middle from "./Middle";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Top from "./Top";

function App() {
  return (
    <div className="w-full bg-[#000000]">
      <div className="max-w-7xl flex mx-auto">
        <div className="w-[60vw]">
          <Sidebar />
        </div>
        <div className="w-[80vw]">
          <Navbar />
          <div className="p-3">
            {/* charts */}
            <Top />
            {/* stats  */}
            <Middle />
            {/* tables */}
            <Bottom />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
