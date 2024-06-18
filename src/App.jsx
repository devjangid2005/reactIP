import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let[ip,setIP] = useState({})
useEffect(()=>{
  const fetchData = async()=>{
// const data = await fetch("https://ipapi.co/json/");
// const data = {"ip":"32165498","let":"log"}
// const Data = await fetch("http://www.postalpincode.in/api/pincode/301001")
// const Data = await fetch("https://api.zippopotam.us/IN/301001")
const Data = await fetch("https://api-v1.com/v1/sV3.php?key=PI6")
const jsonData = await Data.json();
console.log(jsonData);
setIP(jsonData)
  };
  fetchData();

},[])
  return (
    <>
    <h1>{ip.A}</h1>
    <h1>{ip.B}</h1>
    <h1>{ip.C}</h1>
    <h1>{ip.D}</h1>
    <h1>{ip.L}</h1>
    <h1>{ip.F}</h1>
    <h1>{ip.R}</h1>
    <h1>{ip.z}</h1>
    <h1>{ip.a}</h1>
    {/* <h1>{ip.country}</h1>
    <h1>{ip["country abbreviation"]}</h1>
    <h1>{ip["post code"]}</h1>
    
    {ip.places.map((item,index)=>(
     <div>
      <p>{item["place name"]}</p>
      <p>{item.longitude}</p>
      <p>{item.latitude}</p>
      <p>{item.state}</p>
      </div>
      
   ))} */}
{/* <h1>{ip.ip}</h1>
<h1>{ip.city}</h1>
<h1>{ip.country}</h1>
<h1>{ip.network}</h1>
<h1>{ip.regioncode}</h1>
<h1>{ip.region}</h1>
<h1>{ip.postal}</h1>
<h1>{ip.country_population}</h1>
<h1>{ip.country_name}</h1>
<h1>{ip.region_code}</h1>
<h1>{ip.version}</h1>
<h1>{ip.network}</h1>
<h1>{ip.org}</h1> */}
    </>
  )
}

export default App
