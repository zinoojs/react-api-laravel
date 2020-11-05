import React from 'react'
import uuid from 'react-uuid'

const UserData = props => {

    return (
        <table className="u-full-width">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th></th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <tr key={uuid()}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.gender}</td>
                            <td>
                                <button onClick={ () => props.editUser(user)} >Edit</button>
                            </td>
                            <td>
                                <button onClick={ () => props.deleteUser(user.id) } >Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}>User Not Found</td>
                    </tr>
                )}
            
            
            </tbody>
        </table>
    )
}
   
export default UserData