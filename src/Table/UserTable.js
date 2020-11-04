import React from 'react'

const UserData = props => (
    <table className="u-full-width">
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.gender}</td>
                    <td>
                        <button onClick={ () => props.editUser(user)} >Edit</button>
                        <button onClick={ () => props.deleteUser(user.id) } >Delete</button>
                    </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>User Not Found</td>
                </tr>
            )}
            
            
        </tbody>
    </table>
)   
export default UserData