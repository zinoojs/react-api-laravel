import React, { useState, useEffect } from 'react'

const EditUser = props => {

    const [user, setUser] = useState(props.currentUser)
    const HandleInput = e => {
        const { name, value } = e.target 
        setUser({ ...user, [name]:value })
    }
    useEffect(() => {
        setUser(props.currentUser)
    },[props])
    return (
        <form action="" onSubmit={(e) => {
            e.preventDefault()
            props.updateUser(user.id, user)
        }}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={user.name} onChange={HandleInput}  />
            <label htmlFor="name">Email</label>
            <input type="text" name="email" value={user.email} onChange={HandleInput} /> <br/>
            <label htmlFor="name">phone</label>
            <input type="text" name="phone" value={user.phone} onChange={HandleInput} /> <br/>
            <label htmlFor="name">gender</label>
            <input type="text" name="gender" value={user.gender} onChange={HandleInput} /> <br/>
            <button>Update User</button> <br />
            <button onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    )
}
export default EditUser