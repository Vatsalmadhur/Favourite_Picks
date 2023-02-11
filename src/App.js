import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";



function App() {
  return (
    <>
      <Navbar />

      <div className="mainBox">
        <Card
          sname="Stranger Things"
          imgsrc=""
          title="A Netflix Orignals"
          link="https://www.netflix.com/in/title/80057281"
        />
        <Card
          sname="Dark"
          imgsrc="./images/Dark.jpeg"
          title="A Netflix Orignals"
          link="https://www.netflix.com/in/title/80100172"
        />

        <Card
          sname="Squid Game"
          imgsrc=""
          title="A Netflix Orignals"
          link="https://www.netflix.com/in/title/81040344"
        />

        <Card
          sname="Money Heist"
          imgsrc=""
          title="A Netflix Orignals"
          link="https://www.netflix.com/in/title/80192098"
        />

        <Card
          sname="Wednesday"
          imgsrc=""
          title="A Netflix Orignals"
          link="https://www.netflix.com/in/title/81231974"
        />

        <Card
          sname="The Haunting of Hill House"
          imgsrc=""
          title="A Netflix Orignals"
          link="https://www.netflix.com/in/title/80189221"
        />
      </div>
    </>
  );
}

export default App;
