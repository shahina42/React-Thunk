import { useState } from "react";
import "./App.css";
import Action from "./Components/Action";
import Store from "./Components/Store";

function App() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false)

  Store.subscribe(() => {
    setData(Store.getState().data.data);
    setToggle(true)
  });

  const cleardata = () => {
    setData([])
    setToggle(false)
  }

  return (
    <>
      <button onClick={() => Store.dispatch(Action())}>
        Fetch Data
      </button>
      {data.map((item,ind) => {
        return (
          <div key={ind} className="data">
            <div className="smalldiv">
              <div className="answers">
                <h1>Name :</h1> <h2>{item.name}</h2>
              </div>
              <div className="answers">
                <h1>Username : </h1>
                <h2> {item.username}</h2>
              </div>

              <div className="answers">
                <h1>Email : </h1>
                <h2> {item.email}</h2>
              </div>
              <div className="answers">
                <h1>Website : </h1>
                <h2> {item.website}</h2>
              </div>

              <div className="answers">
                <h1>Phone Number : </h1>
                <h2> {item.phone}</h2>
              </div>
            </div>
          </div>
        );
      })}
      {toggle && <button onClick={cleardata}>Clear Data</button>} </>
  );
}

export default App;