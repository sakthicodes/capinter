import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Insights from "./components/Insights";
import Navbar from "./components/Navbar";
import "@fontsource/outfit"; // Defaults to 400 weight
function App() {
  
  return (
    <main className="font-bodyFont w-full h-auto bg-gradient-to-r from-[#FFF2F2] to-[#FFD3D2] text-lightText scroll-smooth  overflow-hidden ">

      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
        </div>
      </div>
      <Feature />
      <Insights/>
     </main>
  );
}

export default App;
