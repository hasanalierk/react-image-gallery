
import data from "./helper/data";
import "./styles/style.css";

function App() {
  return (
    <div>
      <h1> İMAGE GALLERY </h1>
      <div className="container">
      {data.map((item, i) => {
        const {
          photographer,
          src: { large },
        } = item;
        // console.log(photographer)
        // console.log(large)
        return (
          <div className="map-div" key={i}>
            <img className="picture" src={large} alt="" />
            <div className="photographer">{photographer}</div>
          </div>
        );
      })}
      </div>
      
      
      
    </div>
  );
}

export default App;
//! en son desc yaparken kaldın ordan devam edersin
