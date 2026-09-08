import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`,  {email,password}
                
            );
            const accessToken=response.data.accessToken;
            const refreshToken=response.data.refreshToken;
            localStorage.setItem('accessToken',accessToken);
            localStorage.setItem('refreshToken',refreshToken);
            navigate('/dashboard');
            
        }
        catch(error){
            console.log(`Axios request failed! : ${error}`);
            
        }
    }
    return (<>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
        
    
    </>)
}
export default Login;