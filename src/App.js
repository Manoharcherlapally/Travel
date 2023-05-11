
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import SignUp from './Components/Pages/SignUp';
import Prodcast from './Components/Pages/prodcast';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/services' exact element={<Services/>}/>
        <Route path='/prodcast' exact element={<Prodcast/>}/>
        <Route path='/sign-up' exact element={<SignUp/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
