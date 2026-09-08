import { useState } from "react";
import axios from "axios";
function ApplicationForm({existingApplication,onSuccess}){
        const [companyName,setcompanyName]=useState(existingApplication ? existingApplication.companyName : '');
        const [role,setrole]=useState(existingApplication ? existingApplication.role : '');
        const [status,setstatus]=useState(existingApplication ? existingApplication.status: 'Applied');
        const [notes,setnotes]=useState(existingApplication ? existingApplication.notes : '');
        const [link,setlink]=useState(existingApplication ? existingApplication.link : '');

      
        const handleSubmit=async(event)=>{
            event.preventDefault();
            try{
            const accessToken=localStorage.getItem('accessToken');
            if(existingApplication){
                 const response=await axios.put(`${import.meta.env.VITE_API_URL}/api/applications/${existingApplication._id}`,{ companyName, role, status, notes, link },{headers:
                    {Authorization:`Bearer ${accessToken}`}
                 });
            }
            else{
                const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/applications`,{ companyName, role, status, notes, link },{headers:
                    {Authorization:`Bearer ${accessToken}`}
                 });
            }
            onSuccess();
      }catch(error){
        console.log(error.message);
      }

    }     
    return (<>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="companyName">CompanyName:</label>
                <input type="text" id="companyName" value={companyName} onChange={(e)=>setcompanyName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="role">Role:</label>
                <input type="text" id="role" value={role} onChange={(e)=>setrole(e.target.value)} />
        </div>
        <div>
            <label htmlFor="category-select">Status:</label>
            <select id="category-select"
            value={status}
            onChange={(e)=>setstatus(e.target.value)}>
                <option value="Applied">Applied</option>
                <option value="OA">OA</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
            </select>
        </div>
        <div>
            <label htmlFor="notes">Notes:</label>
                <textarea name="notes" id="notes" value={notes} onChange={(e)=>setnotes(e.target.value)}></textarea>
        </div>
        <div>
            <label htmlFor="link">Link:</label>
                <input type="url" id="link" value={link} onChange={(e)=>setlink(e.target.value)} />
        </div>
        <button type="submit">Save</button>
        </form></>
        )
}

export default ApplicationForm;