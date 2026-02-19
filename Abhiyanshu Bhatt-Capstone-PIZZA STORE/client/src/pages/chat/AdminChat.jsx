import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/axiosConfig";

const AdminChat = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/auth/users");
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-4">
      <h3>Select User to Chat</h3>

      <div className="list-group">
        {users.map((user) => (
          <Link
            key={user._id}
            to={`/admin-chat/${user._id}`}
            className="list-group-item list-group-item-action"
          >
            {user.name} ({user.email})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminChat;
