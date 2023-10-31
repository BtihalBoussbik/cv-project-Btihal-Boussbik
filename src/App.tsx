import './App.css';
import  Home  from './screens/home.tsx';
import {Formulaire} from './screens/formulaire.tsx';


import { NavLink } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
   <div>
    <nav>
      <NavLink to='/'>home</NavLink><br /><br />
      <NavLink to='/Formulaire'>formulaire</NavLink><br /><br />
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Formulaire' element={<Formulaire/>}/>
    </Routes>
   </div>
  
  );
}


export default App

