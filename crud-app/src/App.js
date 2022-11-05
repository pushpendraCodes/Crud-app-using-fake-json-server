import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import UserAdd from './UserAdd';
import Navbar from './Navbar';
import Edit from './Edit';

function App() {
  return (
   <>
<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home />} />
<Route path="/adduser" element={<UserAdd/>} />
<Route path="/EditUser/:id" element={<Edit/>} />



</Routes>
</BrowserRouter>

  
   </>
  );
}

export default App;
