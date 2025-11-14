import React, { useEffect, useState } from "react";
import '../../assets/style.css'
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=5")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="users-container">
      <h2 className="users-title">Users List</h2>

      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img
                    src={user.image}
                    alt={user.firstName}
                    className="user-avatar"
                  />
                </td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address?.city || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">
                Loading users...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
