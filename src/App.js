import Navbar from "./components/navbar/Navbar";
import './App.css';
import Details from "./components/details/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <p className="header">Let's calculate <b>distance</b> from Google maps</p>
      <div className="main-content">
        <Details />
      </div>
    </div>
  );
}

export default App;
