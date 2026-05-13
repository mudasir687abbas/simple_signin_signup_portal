const BASE_URL = "https://simple-signin-signup-portal-backend.vercel.app"


const api_register = async (data)=>{
    
    let res = await fetch(`${BASE_URL}/api/auth/register`,{
         method:"POST",
         body:JSON.stringify(data),
         headers:{ 'Content-Type':'application/json'}
    }
    );
    let res_data = await res.json();
    console.log(res_data);
    return res_data;
}
const api_login = async (data)=>{
    let res = await fetch(`${BASE_URL}/api/auth/login`,{
         method:"POST",
         body:JSON.stringify(data),
         headers:{ 'Content-Type':'application/json'}
    }
    );
    let res_data = await res.json();
    return res_data;
}

export {api_register,api_login}
