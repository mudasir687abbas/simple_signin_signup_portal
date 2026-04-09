

const api_register = async (data)=>{
    let res = await fetch(`/api/auth/register`,{
         method:"POST",
         body:JSON.stringify(data),
         headers:{ 'Content-Type':'application/json'}
    }
    );
    let res_data = await res.json();
    return res_data;
}
const api_login = async (data)=>{
    let res = await fetch(`/api/auth/login`,{
         method:"POST",
         body:JSON.stringify(data),
         headers:{ 'Content-Type':'application/json'}
    }
    );
    let res_data = await res.json();
    return res_data;
}

export {api_register,api_login}