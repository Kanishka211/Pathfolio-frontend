import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Register(){
    const navigate = useNavigate();
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`,  {name,email,password}
                
            );
            navigate('/');
            
        }
        catch(error){
            console.log(`Axios request failed! : ${error}`);
            
        }
    }
    return (<>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
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
export default Register;