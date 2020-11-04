import React, { useState, useEffect } from 'react'
import UserData from "./Table/UserTable"
import AddUser from './Form/AddUser'
import EditUser from './Form/EditUser'

const App = () => {


  const [users, setUsers] = useState([])
  const initialUser = { id: null, name: '', email: '', phone:'', gender:'' }
  const [currentUser, setCurrentUser] = useState(initialUser)
  const [ editing, setEditing ] = useState(false)
  const addUser = user => {
    user.id = users.length + 1 
    setUsers([...users, user ])
  }
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/student')
      .then(res => res.json())
      .then(json => {
      setUsers(json.data)
    })
  }, [])
  const deleteUser = id => {
    setEditing(false)
    setUsers( users.filter(user => user.id !== id))
  }
  const editUser = user => {
    setEditing(true)
    setCurrentUser({ id:user.id, name:user.name, email:user.email, phone:user.phone, gender:user.gender, food:user.food })
  }
  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers( users.map( user => user.id === id ? updateUser : user ))
  }
  return (
    <div className="container">
      <h1>React CRUD Example{users.length}</h1>
      <div className="row">
        <div className="four columns">
          {
            editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUser updateUser={updateUser} setEditing={setEditing} currentUser={currentUser} />
              </div>
            ): (
              <div>
                <h2>Add User</h2>
                <AddUser addUser={addUser} />
              </div>
            )
          }
          
        </div>
        <div className="eight columns">
          <h2>User List</h2>
          <UserData users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  )
}
export default App;