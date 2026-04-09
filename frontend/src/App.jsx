import Header from './components/Header';
import Footer from './components/Footer';
import Login from "./pages/Login";
import Register from "./pages/Register";
import {useState} from 'react';
import { authContext } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import './App.css';
function App() {
  const {logedUser} = authContext();
  const [isShowLoginForm,setShowLoginForm] = useState(true);
  return (
    <div className='app'>
     <Header toggleForm={setShowLoginForm} togglerForm={isShowLoginForm}/>
     <div className='main'>
       {logedUser ? <Dashboard/> : isShowLoginForm ? <Login toggleForm={setShowLoginForm}/> : <Register toggleForm={setShowLoginForm}/>}
     </div>
     <Footer/>  
    </div>
  );
}

export default App;
