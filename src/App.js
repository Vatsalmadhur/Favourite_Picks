import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import SData from "./SData";

function App() {
  return (
    <>
      <Navbar />

      <div className="mainBox">
        {SData.map(function ncard(val,index) {
          return (
            <Card
            key={index}
              sname={val.sname}
              imgsrc={val.imgsrc}
              title={val.title}
              link={val.link}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
