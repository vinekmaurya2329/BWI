import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
 import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute';
function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/home' element={<ProtectedRoute Component = {HomePage}/>}/>
    
    </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;
