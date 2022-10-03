import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner"
import Rowpost from "./Components/Rowpost/Rowpost";
import { Orginals,actions,comedy ,horror,romance} from './url'

function App() {
  return (
    <div className="App">
       <NavBar />
       <Banner />
       <Rowpost title="Netflix Orginals" url={Orginals}/>
       <Rowpost title="Action" isSmall url={actions}/>
       <Rowpost title="Comedy" isSmall url={comedy}/>
       <Rowpost title="Horror" isSmall url={horror}/>
       <Rowpost title="Romance" isSmall url={romance}/>
    </div>
  );
}

export default App;
