import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import WeatherWidget from "./components/weather/WeatherWidget";
import Landing from "./containers/Landing";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Landing />
    </div>
  );
}

export default App;
