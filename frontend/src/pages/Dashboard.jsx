import { authContext } from '../context/AuthContext';
import '../styles/dashboard.css'
const Dashboard = ()=>{
    const {logedUser,setLoading} = authContext();
    if(logedUser)
        setLoading(false)
    
    return(
        <div className='dashboardDiv'>
          <h1>Dear, <span>{logedUser.name}</span></h1>
        </div>

    )
}
export default Dashboard;