import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import DK from "./images/DarkWS.jpeg"
import ST from "./images/StrangerThingsWS.jpeg"
import SG from "./images/SquidgameWS.jpg"
import MH from "./images/MoneyheistWS.jpeg"
import WD from "./images/WednesdayWS.jpeg"
import HH from "./images/TheHauntingWS.jpg"





function App() {
  return (
    <>
      <Navbar />

      <div className="mainBox">
        <Card
          sname="Stranger Things"
          imgsrc={ST}
          title="A Netflix Orignals"
          link="https://www.netflix.com/in/title/80057281"
        />
        <Card
          sname="Dark"
          imgsrc={DK}
          title="A Netflix Orignals"
          link="https://www.netflix.com/in/title/80100172"
        />

        <Card
          sname="Squid Game"
          imgsrc={SG}
          title="A Netflix Orignals"
          link="https://www.netflix.com/in/title/81040344"
        />

        <Card
          sname="Money Heist"
          imgsrc={MH}
          title="A Netflix Orignals"
          link="https://www.netflix.com/in/title/80192098"
        />

        <Card
          sname="Wednesday"
          imgsrc={WD}
          title="A Netflix Orignals"
          link="https://www.netflix.com/in/title/81231974"
        />

        <Card
          sname="The Haunting of Hill House"
          imgsrc={HH}
          title="A Netflix Orignals"
          link="https://www.netflix.com/in/title/80189221"
        />
      </div>
    </>
  );
}

export default App;
