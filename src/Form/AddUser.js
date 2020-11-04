import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

const AddUser = props => {

    const initialUser = { id: null, name: '', email: '', phone:'', gender:'' }
    const [user, setUser] = useState(initialUser)
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = () => {
        if(!user.name || !user.email || !user.phone || !user.gender ) return
        props.addUser(user)
        setUser(initialUser)
    }
    const HandleInput = e => {
        const { name, value } = e.target 
        setUser({ ...user, [name]:value })
    }
    return (
        <form action="" onSubmit={ handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={user.name} onChange={HandleInput} ref={register({ required: true, minLength: 6 })} />
            { errors.name && errors.name.type === "required" && <span>required</span> }
            { errors.name && errors.name.type === "minLength" && <span>minlength is 6 required</span> }
            <label htmlFor="name">email</label>
            <input type="text" name="email" value={user.email} onChange={HandleInput} /> <br/>
            <label htmlFor="name">phone</label>
            <input type="text" name="phone" value={user.phone} onChange={HandleInput} /> <br/>
            <label htmlFor="name">gender</label>
            <input type="text" name="gender" value={user.gender} onChange={HandleInput} /> <br/>     
            <input type="submit"/>
        </form>
    )
}
export default AddUser