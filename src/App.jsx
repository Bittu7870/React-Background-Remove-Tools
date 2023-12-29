import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RemoveBackground from "./components/RemoveBackground";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="nav-section">
        <RemoveBackground />
      </div>
      <Footer />
    </>
  );
};

export default App;
