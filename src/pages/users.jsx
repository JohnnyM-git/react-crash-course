import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

function Users(){
    const { id } = useParams()
    const [user, setUser] = useState({})

    async function fetchUser() {
     const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
     setUser(data)

    }
    useEffect(() =>{
        fetchUser()
    },[])


    return (
        <div>
            <Link to= "/">Go Back</Link>
     <p>{user.id}</p>
     <p>{user.name}</p>
     <p>{user.email}</p>
     <p>{user.username}</p>
     
        </div>
    );

}

export default Users;