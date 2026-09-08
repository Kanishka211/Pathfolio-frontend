function isStale(lastUpdated){
    const now=new Date();
    const updated=new Date(lastUpdated);
    const diffInMs=now-updated;
    const diffInDays=diffInMs/(1000*3600*24);
    return diffInDays>7;
}
function KanbanBoard({applications,onEdit,onDelete}){
    const statuses=['Applied','OA','Interview','Offer','Rejected'];
    return (
        <div style={{display:'flex',gap:'10px'}}>
            {statuses.map((status)=>(
                <div key={status} style={{border:'1px solid gray',padding:'10px',minWidth:'150px'}}>
                    <h3>{status}</h3>
                    {applications.filter((app)=>app.status===status)
                    .map((app)=>(
                        <div key={app._id}>
                            <p>{app.companyName}</p>
                            <p>{app.role}</p>
                            {isStale(app.lastUpdated) && <p style={{color:'red',fontWeight:'bold'}}>⚠️ Needs follow-up</p>}
                            <button onClick={()=>onEdit(app)}>Edit</button>
                            <button onClick={()=>onDelete(app._id)}>Delete</button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default KanbanBoard;
