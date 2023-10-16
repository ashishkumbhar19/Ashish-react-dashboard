import { Routes, Route, Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import CreateAds from "./Components/CreateAds/CreateAds"
export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/createads" element={<CreateAds/>} />
    </Routes>
  )
}