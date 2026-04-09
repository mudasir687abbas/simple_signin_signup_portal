import { authContext } from '../context/AuthContext';
import './dashboard.css'
const Dashboard = ()=>{
    const {logedUser} = authContext();
    return(
        <div className='dashboardDiv'>
          <h1>Dear, <span>{logedUser.name}</span></h1>
        </div>

    )
}
export default Dashboard;