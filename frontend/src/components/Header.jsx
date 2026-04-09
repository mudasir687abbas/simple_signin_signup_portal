import { authContext } from '../context/AuthContext';
import './header.css'
const Header = ({toggleForm,togglerForm})=>{
    const {logedUser,logout} = authContext();
    return(
    <header>
      <h1>Portal</h1>
      <nav>
        {!logedUser && <button style={{background: !togglerForm && '#7c6af7'}} onClick={()=>{toggleForm(false)}}>Register</button>}
        {!logedUser && <button style={{background: togglerForm && '#7c6af7'}} onClick={()=>{toggleForm(true)}}>Login</button>}
        {logedUser && <button onClick={()=>{logout()}}>Logout</button>}
      </nav>
    </header>);
}

export default Header;