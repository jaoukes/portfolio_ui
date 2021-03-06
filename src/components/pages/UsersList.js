import React, { useState } from 'react'
import fetchFunc from '../items/fetchFunc'

function UsersList() {
    const [users, setUsers] = useState([])

    const url = "http://localhost:9000/users"

    fetch(url)
        .then(response => fetchFunc.handleResponse(response))
        .then(data => setUsers(data))
        .catch(err => fetchFunc.handleError)

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr key={user.UserID}>
                            <td>{user.FirstName}</td>
                            <td>{user.LastName}</td>
                            <td>{user.Email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList