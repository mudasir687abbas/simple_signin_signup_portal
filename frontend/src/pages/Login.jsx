import './register.css';
import {useState,useEffect} from 'react';
import { authContext } from '../context/AuthContext';
const Login=({toggleForm})=>{
  const {login} = authContext();
  const [formData,setFormData] = useState({email:'',password:''});
    const handleChange = (e)=>{
      let {name,value} = e.target;
      
      setFormData({ ...formData, [name]: value });
    }
    const submitForm = (e)=>{
        e.preventDefault();
        let isLogged = login(formData);
        if(isLogged)
          setFormData({name:'',email:'',password:''});
  
      }
    return(
      <div className='registerDiv'>
        <div className='formDiv'>
            <form onSubmit={(e)=>{submitForm(e)}}>
                <h2 className='title'>Login</h2>
                <h2 className='subTitle'>Welcome Back, Dear User</h2>
                
                <div className='formgroup'>
                    <label>Email:</label>
                    <input 
                      type='email'
                      placeholder='Email...'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                    />
                </div>
                <div className='formgroup'>
                    <label>Password:</label>
                    <input 
                      type='password'
                      placeholder='Password...'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                    />
                </div>
                <div className='formbtngroup'>
                    <input 
                      type='submit'
                      value='Login'
                    />
                    <input 
                      type='reset'
                      value='Reset'
                    />
                </div>
                <p>New to Portal? <span onClick={()=>{toggleForm(false)}}>Create one</span></p>
            </form>
          
        </div>
      </div>
    )
}

export default Login;