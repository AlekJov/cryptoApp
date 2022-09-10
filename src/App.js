import React,{useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Coins from "./components/Coins";
import axios from "axios";
import Coin from "./routes/Coin";





function App() {

  const [coins,setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(()=>{
    axios.get(url).then((response)=>{
      
      setCoins(response.data)
    }).catch((error)=>{
      console.log(error)
    })

  },[])

 

  return (
    <div className="App">
       <Navbar/>
       <Routes>
        <Route path="/" element = {<Coins coins={coins}/>}/>
        <Route path="coin/:coinId" element = {<Coin/>}/>
       </Routes>
    </div>
  );
}

export default App;
