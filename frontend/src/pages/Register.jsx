import { useEffect, useState } from 'react';
import {authContext} from '../context/AuthContext';
import '../styles/register.css';
const Register=({toggleForm})=>{
  const {register,setLoading} = authContext()
  const [formData,setFormData] = useState({name:'',email:'',password:''});
  const handleChange = (e)=>{
    let {name,value} = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const submitForm = async (e)=>{
      e.preventDefault();
      setLoading(true);
      let isRegisterd = await register(formData);
      if(isRegisterd.success){
        setLoading(false);
        alert("You are registerd.Now you can login");
        setFormData({name:'',email:'',password:''});
        toggleForm(true);

      }else{
        alert(isRegisterd.message);
      }
      
      console.log(isRegisterd);

    }

    return(
      <div className='registerDiv'>
        <div className='formDiv'>
            <form onSubmit={(e)=>{submitForm(e)}}>
                <h2 className='title'>Register</h2>
                <h2 className='subTitle'>Tract thy digital world</h2>
                <div className='formgroup'>
                    <label>Name:</label>
                    <input 
                      type='text'
                      placeholder='Enter username'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                    />
                </div>
                <div className='formgroup'>
                    <label>Email:</label>
                    <input 
                      type='email'
                      placeholder='Enter email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                    />
                </div>
                <div className='formgroup'>
                    <label>Password:</label>
                    <input 
                      type='password'
                      placeholder='*******'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                    />
                </div>
                <div className='formbtngroup'>
                    <input 
                      type='submit'
                      value='Register'
                    />
                    <input 
                      type='reset'
                      value='Reset'
                    />
                </div>
              <p>Don't have an account? <span onClick={()=>{toggleForm(true)}}>Login Here</span></p>
            </form>
          
        </div>
      </div>
    )
}

export default Register;