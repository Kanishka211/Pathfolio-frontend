import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ApplicationForm from '../components/ApplicationForm';
import KanbanBoard from "../components/KanbanBoard";
import {io} from "socket.io-client";

function Dashboard() {
    useEffect(()=>{
        const socket=io(import.meta.env.VITE_API_URL);
        socket.on('connect',()=>{
            console.log('Connected to socket:',socket.id);
        });
        socket.on('applicationChanged',()=>{
            fetchApplications();
        })
        return ()=>{
            socket.disconnect();
        }
    },[]);
    const navigate = useNavigate();
    const [application, setApplications] = useState([]);
    const [editingApplication,setEditingApplication]=useState(null);
    const deleteApplications=async(id)=>{
           try{
            const accessToken=localStorage.getItem('accessToken');
           const response=await axios.delete(`${import.meta.env.VITE_API_URL}/api/applications/${id}`,{
            headers:{
                Authorization:`Bearer ${accessToken}`
            }
           })
           fetchApplications();
           }
           catch(error){
            console.log(error.message);
           }

    }
      const fetchApplications = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    navigate('/');
                    return;
                }
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/applications`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                setApplications(response.data.Application);
            } catch (error) {
                console.log(error.message);
            }
        };
    useEffect(() => {fetchApplications();
    }, []);

    return (
        <>
            <h2>My Applications</h2>
            <ApplicationForm existingApplication={editingApplication}  onSuccess={()=>{fetchApplications();
                setEditingApplication(null);
            }}/>
            <KanbanBoard 
            applications={application}
            onEdit={setEditingApplication}
            onDelete={deleteApplications}/>
           
        </>
    )
}

export default Dashboard;