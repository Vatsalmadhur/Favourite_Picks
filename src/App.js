import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';

function App() {
  return (
  <>
  <Navbar/>
  <div className="mainBox">
    <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
    </div>

  </>
  );
}

export default App;
