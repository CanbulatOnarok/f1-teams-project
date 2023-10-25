import Navbar from "./components/Navbar"
import TeamList from "./components/TeamList"
import Form from "./components/Form"
import "./style/App.scss"
import { useEffect, useState } from "react"
import axios from "axios"





function App() {

  const [f1, setF1] = useState([]);

  const getData = async () => {
    const response =await axios.get("http://localhost:3005/f1");
    const f1 =await response.data;
    setF1(f1);
    console.log(f1);
  }

useEffect(()=>{
  getData();
},[]);


  return (
    <>
      <Navbar />
      <Form />
      <TeamList f1={f1}/>
    </>
  );
}

export default App;
