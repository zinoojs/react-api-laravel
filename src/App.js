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
    fetch('http://127.0.0.1:8000/api/student', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name:user.name, email:user.email, phone:user.phone, gender:user.gender})
    }).then(user => setUsers([...users, user]))
      
    // user.id = users.length + 1 
    // setUsers([...users, user ])
  }
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/student')
      .then(res => res.status === 200 ?  res.json() : "api  error")
      .then(json => {
        setUsers(json.data)
      })
  }, [])


  const deleteUser = id => {
    fetch('http://127.0.0.1:8000/api/student/'+ id, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    }).then( () => {
          setEditing(false)
          setUsers( users.filter(user => user.id !== id))
        } 
      
    )

  }



  const editUser = user => {
    setEditing(true)
    setCurrentUser({ id:user.id, name:user.name, email:user.email, phone:user.phone, gender:user.gender})
  }
  const updateUser = (id, updateUser) => {
    fetch("http://127.0.0.1:8000/api/student/" + id, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify({ id:updateUser.id, name:updateUser.name, email:updateUser.email, phone:updateUser.phone, gender:updateUser.gender})
    }).then((id) => {
      setEditing(false)
      setUsers( users.map( user => user.id === id ? updateUser : user ))
    }
    )
    
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