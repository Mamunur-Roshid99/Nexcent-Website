import "./App.css";
import Body from "./components/Body/Body";
import Fotter from "./components/Fotter/Fotter";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
        <Navbar />
      <Hero />
      <Body />
      <Fotter />
    </div>
  );
}

export default App;
