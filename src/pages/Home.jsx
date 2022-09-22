import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import User from "../components/user";
import Users from "../components/user";
function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    // console.log(data);
  }



  function renderUsers(){
    return users.map((user) => (
        <Link to={`users/${user.id}`} key={user.id}>
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          />
        </Link>
      ))

  }



  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {users.length ? renderUsers() : <h1>Loading...</h1>}
    </div>
  );
}

export default Home;
